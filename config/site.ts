export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Dashboard",
  description:
    "Make code with fun",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Docs",
      sub_menu: [
        {
          title: 'Menage Docs',
          href: '/docs'
        },
        {
          title: 'Create New Docs',
          href: '/docs/create'
        },
      ]
    },
    {
      title: "Posts",
      href: "/posts",
    },
    {
      title: "Learning Path",
      href: "/learning-path",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}

export const learningPath: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export const docs: { title: string; href: string; description: string }[] = [
  {
    title: "Menage Documentation",
    href: "/docs",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Create New Documentation",
    href: "/docs/create",
    description:
      "For sighted users to preview content available behind a link.",
  }
]