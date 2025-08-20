import matter from "gray-matter"
import remarkFrontmatter from "remark-frontmatter"
import { QuartzTransformerPlugin } from "../types"
import yaml from "js-yaml"
import toml from "toml"
import { FilePath, FullSlug, getFileExtension, slugifyFilePath, slugTag } from "../../util/path"
import { QuartzPluginData } from "../vfile"
import { i18n } from "../../i18n"

export interface Options {
  delimiters: string | [string, string]
  language: "yaml" | "toml"
}

const defaultOptions: Options = {
  delimiters: "---",
  language: "yaml",
}

function coalesceAliases(data: { [key: string]: any }, aliases: string[]) {
  for (const alias of aliases) {
    if (data[alias] !== undefined && data[alias] !== null) return data[alias]
  }
}

function coerceToArray(input: string | string[]): string[] | undefined {
  if (input === undefined || input === null) return undefined

  // coerce to array
  if (!Array.isArray(input)) {
    input = input
      .toString()
      .split(",")
      .map((tag: string) => tag.trim())
  }

  // remove all non-strings
  return input
    .filter((tag: unknown) => typeof tag === "string" || typeof tag === "number")
    .map((tag: string | number) => tag.toString())
}

function getAliasSlugs(aliases: string[]): FullSlug[] {
  const res: FullSlug[] = []
  for (const alias of aliases) {
    const isMd = getFileExtension(alias) === "md"
    const mockFp = isMd ? alias : alias + ".md"
    const slug = slugifyFilePath(mockFp as FilePath)
    res.push(slug)
  }

  return res
}

export const FrontMatter: QuartzTransformerPlugin<Partial<Options>> = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts }
  return {
    name: "FrontMatter",
    markdownPlugins(ctx) {
      const { cfg, allSlugs } = ctx
      return [
        [remarkFrontmatter, ["yaml", "toml"]],
        () => {
          return (_, file) => {
            const fileData = Buffer.from(file.value as Uint8Array)
            const { data } = matter(fileData, {
              ...opts,
              engines: {
                yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
                toml: (s) => toml.parse(s) as object,
              },
            })

            if (data.title != null && data.title.toString() !== "") {
              data.title = data.title.toString()
            } else {
              data.title = file.stem ?? i18n(cfg.configuration.locale).propertyDefaults.title
            }

            const tags = coerceToArray(coalesceAliases(data, ["tags", "tag"]))
						// If tags contain "pub-*", remove them (used for publication management)
						// Add the removed tag to <body> as "data-tag" attribute
						if (tags) {
							// const filteredTags = tags.filter((tag: string) => !tag.startsWith("pub-"))
							const filteredTags = tags.filter((tag: string) => {
								if (tag.startsWith("pub-")) {
									file.data["tag"] = tag
									return false
								}
								return true
							})
							data.tags = [...new Set(filteredTags.map((tag: string) => slugTag(tag)))]
						}

            const aliases = coerceToArray(coalesceAliases(data, ["aliases", "alias"]))
            if (aliases) {
              data.aliases = aliases // frontmatter
              file.data.aliases = getAliasSlugs(aliases)
              allSlugs.push(...file.data.aliases)
            }

            if (data.permalink != null && data.permalink.toString() !== "") {
              data.permalink = data.permalink.toString() as FullSlug
              const aliases = file.data.aliases ?? []
              aliases.push(data.permalink)
              file.data.aliases = aliases
              allSlugs.push(data.permalink)
            }

            const cssclasses = coerceToArray(coalesceAliases(data, ["cssclasses", "cssclass"]))
            if (cssclasses) data.cssclasses = cssclasses

            const socialImage = coalesceAliases(data, ["socialImage", "image", "cover"])

            const created = coalesceAliases(data, ["created", "date"])
            if (created) {
              data.created = created
              data.modified ||= created // if modified is not set, use created
            }

            const modified = coalesceAliases(data, [
              "modified",
              "lastmod",
              "updated",
              "last-modified",
            ])
            if (modified) data.modified = modified
            const published = coalesceAliases(data, ["published", "publishDate", "date"])
            if (published) data.published = published

            if (socialImage) data.socialImage = socialImage

            // Remove duplicate slugs
            const uniqueSlugs = [...new Set(allSlugs)]
            allSlugs.splice(0, allSlugs.length, ...uniqueSlugs)

						if (data.sup) {
							data.supslug = []
							/* transform data.sup to an array if it is not already */
							if (!Array.isArray(data.sup)) {
								data.sup = [data.sup]
							}
							for (let idx = 0; idx < data.sup.length; idx++) {
								const sup = data.sup[idx].toString()
								if (sup.startsWith("[[") && sup.endsWith("]]")) {
									data.sup[idx] = sup.slice(2, -2)
									const slug = slugifyFilePath(data.sup[idx] as FilePath)
									data.supslug[idx] = slug
								} else {
									data.supslug[idx] = slugifyFilePath(sup as FilePath)
								}
							}
						}

						if (data.related) {
							data.relatedslug = []
							/* transform data.related to an array if it is not already */
							if (!Array.isArray(data.related)) {
								data.related = [data.related]
							}
							for (let idx = 0; idx < data.related.length; idx++) {
								const related = data.related[idx].toString()
								if (related.startsWith("[[") && related.endsWith("]]")) {
									data.related[idx] = related.slice(2, -2)
									const slug = slugifyFilePath(data.related[idx] as FilePath)
									data.relatedslug[idx] = slug
								} else {
									data.relatedslug[idx] = slugifyFilePath(related as FilePath)
								}
							}
						}

						if (data.state) {
							const state = data.state.toString()
							/* transformation dictionary:
								* done -> "completed"
								* [[%wip]] -> "work-in-progress"
								* [[%todo]] -> "on-hold"
								* [[%watch]] -> "on-hold"
								* */
							if (state === "done") {
								data.state = "Completed"
							} else if (state === "[[%wip]]") {
								data.state = "Work-in-progress"
							} else if (state === "[[%todo]]" || state === "[[%watch]]") {
								data.state = "On-hold"
							} else {
								data.state = state
							}

						}
            // fill in frontmatter
            file.data.frontmatter = data as QuartzPluginData["frontmatter"]
          }
        },
      ]
    },
  }
}

declare module "vfile" {
  interface DataMap {
    aliases: FullSlug[]
    frontmatter: { [key: string]: unknown } & {
      title: string
    } & Partial<{
        tags: string[]
        aliases: string[]
        modified: string
        created: string
        published: string
        description: string
        socialDescription: string
        publish: boolean | string
        draft: boolean | string
        lang: string
        enableToc: string
        cssclasses: string[]
        socialImage: string
        comments: boolean | string
				supslug: string
      }>
  }
}
