import type { MarkdownOptions } from 'vitepress'
import markdownItTodo from 'markdown-it-todo'
import markdownItFootnote from 'markdown-it-footnote'
import { groupIconMdPlugin } from 'vitepress-plugin-group-icons'
import { postMetaMdPlugin } from './postMetaMdPlugin'

export const markdown: MarkdownOptions = {
  // Shiki主题, 所有主题参见: https://github.com/shikijs/shiki/blob/main/docs/themes.md
  theme: {
    light: 'github-light',
    dark: 'github-dark'
  },
  // lineNumbers: true, // 启用行号

  config(md) {
    md.use(markdownItTodo)
        .use(markdownItFootnote)
        .use(groupIconMdPlugin)
        .use(postMetaMdPlugin)
  },
};
