import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
	afterBody: [],
  footer: Component.MyFooter()
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.MobileOnly(Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    })),
    // Component.ConditionalRender({
    //   component: Component.Breadcrumbs(),
    //   condition: (page) => page.fileData.slug !== "index",
    // }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
    Component.MobileOnly(Component.TableOfContents()),
  ],
  left: [
    Component.TagTitle(),
    // Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.DesktopOnly(Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    })),
		Component.ConditionalRender({
			component: Component.Explorer(),
			condition: (page) => page.fileData.slug == "statistics",
		}),
    Component.DesktopOnly(Component.TableOfContents()),
		Component.DesktopOnly(Component.ConditionalRender({
			component: Component.Backlinks(),
			condition: (page) => page.fileData.slug !== "statistics",
		})),
    Component.DesktopOnly(Component.Graph()),
  ],
  right: [
  ],
	afterBody: [
    Component.MobileOnly(Component.Backlinks()),
    Component.MobileOnly(Component.Graph()),
		Component.Comments({
			provider: "giscus",
			options: {
				repo: "zcysxy/quartz",
				repoId: "R_kgDOOr-j7g",
				category: "Announcements",
				categoryId: "DIC_kwDOOr-j7s4CrJUa",
				inputPosition: "top",
			}
		})
	]
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.TagTitle(),
    // Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}
