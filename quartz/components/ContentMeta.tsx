import { Date, getDate } from "./Date"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import readingTime from "reading-time"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"
import { JSX } from "preact"
import style from "./styles/contentMeta.scss"

interface ContentMetaOptions {
  /**
   * Whether to display reading time
   */
  showReadingTime: boolean
  showComma: boolean
}

const defaultOptions: ContentMetaOptions = {
  showReadingTime: false,
  showComma: false,
}

export default ((opts?: Partial<ContentMetaOptions>) => {
  // Merge options with defaults
  const options: ContentMetaOptions = { ...defaultOptions, ...opts }

  function ContentMetadata({ cfg, fileData, displayClass }: QuartzComponentProps) {
    const text = fileData.text

    if (text) {
      const segments: (string | JSX.Element)[] = []

      if (fileData.frontmatter?.sup) {
        segments.push(
          <span class="meta-sup" title="parent note">
            {fileData.frontmatter.sup.map((supItem: string, idx: number) => (
              <a href={fileData.frontmatter.supslug[idx]}>{supItem}</a>
            ))}
          </span>,
        )
      }

      if (fileData.frontmatter?.related) {
        segments.push(
          <span class="meta-related" title="related note">
            {fileData.frontmatter.related.map((relatedItem: string, idx: number) => (
              <a href={fileData.frontmatter.relatedslug[idx]}>{relatedItem}</a>
            ))}
          </span>,
        )
      }

      if (fileData.dates?.created) {
        segments.push(
          <span class="meta-created" title="created time">
            <Date date={fileData.dates.created} locale={cfg.locale} />
          </span>,
        )
      }
      if (fileData.dates?.modified) {
        segments.push(
          <span class="meta-modified" title="modified time">
            <Date date={fileData.dates.modified} locale={cfg.locale} />
          </span>,
        )
      }

      // Display reading time if enabled
      if (options.showReadingTime) {
        const { minutes, words: _words } = readingTime(text)
        const displayedTime = i18n(cfg.locale).components.contentMeta.readingTime({
          minutes: Math.ceil(minutes),
        })
        segments.push(<span>{displayedTime}</span>)
      }

      // Other metadata segments can be added here
      if (fileData.frontmatter?.state) {
        segments.push(
          <span class="meta-status" title="note status">
            {fileData.frontmatter.state}
          </span>,
        )
      }

      if (fileData.frontmatter?.type?.toString() === "jupyter") {
        const fileName = fileData.filePath
          ?.replace(/^content\//, "")
          .replace(/\.md$/, "")
          .replaceAll(" ", "%20")
        // const badge = `<a target="_blank" href="https://colab.research.google.com/github/zcysxy/quartz/blob/v4/content/jupyter/${fileName}.ipynb"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a>`
        segments.push(
          <span class="meta-type" data-type="jupyter">
            <a
              target="_blank"
              href={`https://colab.research.google.com/github/zcysxy/quartz/blob/v4/content/jupyter/${fileName}.ipynb`}
            >
              <img
                src="https://colab.research.google.com/assets/colab-badge.svg"
                alt="Open In Colab"
								style="margin: 0; vertical-align: sub;"
              />
            </a>
          </span>,
        )
      }

      return (
        <p show-comma={options.showComma} class={classNames(displayClass, "content-meta")}>
          {segments}
        </p>
      )
    } else {
      return null
    }
  }

  ContentMetadata.css = style

  return ContentMetadata
}) satisfies QuartzComponentConstructor
