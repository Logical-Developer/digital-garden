import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.Comments({
      provider: 'giscus',
      options: {
        // from data-repo
        repo: 'eledah/quartz_blog',
        // from data-repo-id
        repoId: 'R_kgDOLxbW_g',
        // from data-category
        category: 'Announcements',
        // from data-category-id
        categoryId: 'DIC_kwDOLxbW_s4ChRbJ',
      }
    }),
  ],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    // Component.Breadcrumbs(),
    Component.Breadcrumbs({rootName: "خانه",}),
    Component.ArticleTitle(),
    // Component.ContentMeta(),
    Component.ContentMeta({showReadingTime: false, showComma: false,}),
    Component.TagList(),
    
  ],
  left: [
    Component.MobileOnly(Component.PageTitle()),
    Component.MobileOnly(Component.Spacer()),
    Component.Darkmode(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.DesktopOnly(Component.TableOfContents()),
    
    
  ],
  right: [
    Component.DesktopOnly(Component.PageTitle()),
    Component.DesktopOnly(Component.Explorer()),
    Component.Graph(),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.MobileOnly(Component.PageTitle()),
    Component.MobileOnly(Component.Spacer()),
    Component.Darkmode(),
    Component.Search(),
    
  ],
  right: [
    Component.PageTitle(),
    Component.DesktopOnly(Component.Explorer()),
  ],
}

