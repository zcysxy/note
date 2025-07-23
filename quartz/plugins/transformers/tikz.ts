import { visit } from "unist-util-visit"
import { QuartzTransformerPlugin } from "../types"

// Change in Markdown syntax tree from codeblock to script tag
export const TikzTransformer: QuartzTransformerPlugin = () => {
  return {
    name: "TikzTransformer",
    externalResources() {
      return {
        js: [
          {
            src: "../../static/tikzjax/tikzjax.js",
            loadTime: "beforeDOMReady",
            contentType: "external",
            async: true,
						attribute: {"data-tex-packages": '{ "array": "", "pgfplots": "" }'}
          },
        ],
        css: [
          {
            src: "../../static/tikzjax/fonts.css",
            loadTime: "beforeDOMReady",
            contentType: "external",
          },
        ],
      }
    },
    markdownPlugins() {
      return [
        () => {
          return (tree, file) => {
            visit(tree, "code", (node) => {
              if (node.lang === "tikz") {
                // Clean up Latex code
                const remove = "&nbsp;"
                node.value = node.value.replaceAll(remove, "")

                let lines = node.value.split("\n")

                // Trim whitespace that is inserted when pasting in code, otherwise TikZJax complains
                lines = lines.map((line) => line.trim())

                // Remove empty lines
                lines = lines.filter((line) => line)

                node.value = lines.join("\n")
                node.type = "html"
                node.value = `<script type="text/tikz"'>${node.value}</script>`
              }
            })
          }
        },
      ]
    },
    htmlPlugins() {
      return [
        () => {
          return (tree, file) => {
            // Change node to include raw HTML before parsing to JSX
            visit(tree, "element", (node, index, parent) => {
              if (node.tagName === "script" && node.properties?.type === "text/tikz") {
                const divNode = {
                  type: "element",
                  tagName: "div",
                  properties: {
                    dangerouslySetInnerHTML: {
                      __html: '<script type="text/tikz">'.concat(
                        node.children[0].value,
                        "</script>",
                      ),
                    },
                  },
                  children: [],
                }
                parent.children[index] = divNode
              }
            })

            // Add the TikZJax stylesheet and script tag to the head
          }
        },
      ]
    },
  }
}
