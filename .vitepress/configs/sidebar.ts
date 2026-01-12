import type {DefaultTheme} from 'vitepress';

export const sidebar: DefaultTheme.Config['sidebar'] = {
    '/docs/admin/changelog/': [
        {
            text: '更新日志',
            items: [
                { text: 'v4.x.x~最新版本', link: '/docs/admin/changelog/' },
                { text: 'v3.x.x 版本', link: '/docs/admin/changelog/3.x.x' },
                { text: 'v2.x.x 版本', link: '/docs/admin/changelog/2.x.x' },
                { text: 'v1.x.x 版本', link: '/docs/admin/changelog/1.x.x' },
            ],
        },

    ],
}
