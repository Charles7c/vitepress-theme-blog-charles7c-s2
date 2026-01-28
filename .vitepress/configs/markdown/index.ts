import type { MarkdownOptions } from 'vitepress'
import markdownItTodo from 'markdown-it-todo'
import markdownItFootnote from 'markdown-it-footnote'
import { groupIconMdPlugin } from 'vitepress-plugin-group-icons'
import { postMetaMdPlugin } from './postMetaMdPlugin'
import { vitepressMermaidPreview } from 'vitepress-mermaid-preview'

export const markdown: MarkdownOptions = {
  // Shiki主题, 所有主题参见: https://github.com/shikijs/shiki/blob/main/docs/themes.md
  theme: {
    light: 'github-light',
    dark: 'github-dark'
  },
  // lineNumbers: true, // 启用行号
  math: true,
  image: {
    // 默认禁用；设置为 true 可为所有图片启用懒加载。
    lazyLoading: true
  },
  config(md) {
    md.use(markdownItTodo)
        .use(markdownItFootnote)
        .use(vitepressMermaidPreview, {
          showToolbar: true,
        })
        .use(groupIconMdPlugin)
        .use(postMetaMdPlugin)
  },
};
