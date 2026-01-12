import type { DefaultTheme } from 'vitepress';

export const nav: DefaultTheme.Config['nav'] = [
  { text: '首页', link: '/', },
  // { text: '分类', link: '/categories' },
  { text: '标签', link: '/tags' },
  { text: '归档', link: '/archives' },
  { text: '导航', link: '/nav', activeMatch: '^/nav/' },
  {
    text: '专栏',
    activeMatch: '^/docs/',
    items: [
      {
        text: 'ContiNew',
        items: [
          { text: 'ContiNew Admin', link: '/docs/admin/changelog/', activeMatch: '^/docs/admin/', },
        ]
      },
    ]
  }
];
