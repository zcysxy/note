import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const TagTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const tagTitleMap = cfg?.tagTitle ?? {}
  const tagUrlMap = cfg?.tagUrl ?? {}
  const tag = fileData.tag // Get the pub-* tag stored by frontmatter processor
  const baseDir = pathToRoot(fileData.slug!)
  
  // Get the title for the tag from the config
  const tagTitleText = tag && typeof tag === 'string' && tagTitleMap[tag] ? tagTitleMap[tag] : ""
  
  // Get the URL for the tag from the config, fallback to baseDir if not specified
  const tagUrl = tag && typeof tag === 'string' && tagUrlMap[tag] ? 
    baseDir + tagUrlMap[tag] : baseDir
  
  // If no matching tag title found, don't render anything
  if (!tagTitleText) {
    return null
  }
  
  return (
    <h2 class={classNames(displayClass, "tag-title")}>
      <a href={tagUrl}>{tagTitleText}</a>
    </h2>
  )
}

TagTitle.css = `
.tag-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}
`

export default (() => TagTitle) satisfies QuartzComponentConstructor
