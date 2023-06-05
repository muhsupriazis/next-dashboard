export interface NavItem {
  title: string
  href?: string
  submenu?: [{
    title?: string
    href: string
  }]
  disabled?: boolean
  external?: boolean
}
