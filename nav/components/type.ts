export interface NavLink {
  /** 站点图标 */
  noIcon?: boolean
  icon?: string | { svg: string }
  /** 站点徽章 */
  badge?:
      | string
      | {
    text?: string
    type?: 'info' | 'tip' | 'warning' | 'danger'
  }
  /** 站点名称 */
  title: string
  /** 站点描述 */
  desc?: string
  /** 站点链接 */
  link: string
  /** 源码链接 */
  source?: string
  /** 所有者 */
  author?: string
  /** 主要开发语言 */
  language?: string
  /** 标签 */
  tags?: string[]
  /** 是否过时或停更 */
  outdated?: boolean
}

export interface NavData {
  title: string
  tag?: string
  noIcon?: boolean
  items: NavLink[]
}
