import { createContentLoader } from 'vitepress'
// @ts-ignore
import dayjs from 'dayjs'
import type { Post } from './types'
import { removeMdPro } from './utils/removeMdPro'

declare const data: Post[]
export { data }

export default createContentLoader('{posts,docs}/**/*.md', {
  excerpt: true,
  transform(raw): Post[] {
    return raw
      .filter(({ frontmatter }) => frontmatter.datetime && frontmatter?.draft !== true)
      .map(({ url, frontmatter, excerpt }) => ({
        title: frontmatter.title,
        url,
        excerpt: frontmatter.description || removeMdPro(excerpt).replace(new RegExp(`${frontmatter.title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*&#8203;`), '').trim(),
        author: frontmatter.author,
        datetime: formatDate(frontmatter.datetime),
        category: frontmatter.category,
        tags: frontmatter.tags,
        top: frontmatter.top,
        order: frontmatter.order,
      }))
      .sort((a, b) => b.datetime.time - a.datetime.time)
  }
})

function formatDate(raw: string): Post['datetime'] {
  const date = new Date(raw)
  return {
    time: +date,
    string: dayjs(date).format('YYYY-MM-DD')
  }
}
