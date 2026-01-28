import { defineConfig } from 'vitepress'
import {
  groupIconVitePlugin,
  localIconLoader
} from 'vitepress-plugin-group-icons'
import { ImagePreviewPlugin } from 'vitepress-plugin-image-preview'
import { metaData, head, markdown, nav, sidebar, localSearchOptions } from './configs'

export default defineConfig({
  lang: metaData.lang,
  title: metaData.title,
  description: metaData.description,
  head, // <head>内标签配置
  vite: {
    plugins: [
      groupIconVitePlugin({
        customIcon: {
          java: 'vscode-icons:file-type-java',
          xml: 'vscode-icons:file-type-xml',
          sql: 'vscode-icons:file-type-sql',
          conf: 'vscode-icons:file-type-config',
          sh: 'vscode-icons:file-type-shell',
          bat: 'vscode-icons:file-type-bat',
          gitcode: localIconLoader(import.meta.url, '../public/gitcode.svg'),
          gitee: localIconLoader(import.meta.url, '../public/gitee.svg'),
          github: localIconLoader(import.meta.url, '../public/github.svg'),
        }
      }),
      ImagePreviewPlugin()
    ],
  },

  sitemap: {
    hostname: 'https://charles7c.top/'
  },

  lastUpdated: true, // 显示最后更新时间
  markdown: markdown, // Markdown配置
  themeConfig: {
    i18nRouting: false,
    logo: '/logo.png',
    nav, // 导航栏配置
    sidebar, // 侧边栏配置
    outline: {
      level: 'deep', // 右侧大纲标题层级
      label: '目录', // 右侧大纲标题文本配置
    },
    darkModeSwitchLabel: '切换日光/暗黑模式',
    sidebarMenuLabel: '文章',
    returnToTopLabel: '返回顶部',
    lastUpdated: {
      text: '最后更新',
      formatOptions:{
        dateStyle:'full',
        timeStyle:'short'
      }
    },
    // 文档页脚文本配置
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    search: {
      provider: 'local',
      options: localSearchOptions
    },
    // 导航栏右侧社交链接配置
    socialLinks: [
      {
        icon: {
          svg: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="200" height="200" viewBox="0 0 96 96" enable-background="new 0 0 96 96" xml:space="preserve"><title>GitCode</title><image id="image0" width="96" height="96" x="0" y="0"\n' +
              '    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAIGNIUk0AAHomAACAhAAA+gAAAIDo\n' +
              'AAB1MAAA6mAAADqYAAAXcJy6UTwAAAA/UExURQAAANsgQNogP9sgPdogPtogP9ogPtogP9ogP9og\n' +
              'PtsgQN8gQNsgPtogPt0gPtggPdsgPtwgQNogPtogPv///3+ZkFoAAAATdFJOUwAgUHCfz9+/r4BA\n' +
              'EO9gb3CQMM9sefpCAAAAAWJLR0QUkt/JNQAAAAd0SU1FB+gLFw4SAP63MKEAAAM4SURBVGje7Vrd\n' +
              'mqMwCFUT8+9sHN//XdfWWasBEhL124td7mbaniMHAoS26/4561d7BngQclTLjyltrPP3gQu5Qx9t\n' +
              'lMMd6FYvtAXpLqH7KYf+I9fUHBRvQxF+c6OJggv/prD1ER8UG34TqjK0Ze1TMzU6ffHVOej0i61+\n' +
              'bIB/meRFoh8b8dejx2Ho66KbBKKMP7fI/7FiMl3EX8aSPhfxlyVfmy7pv1k2V30tfpzBv2SOQNbB\n' +
              '6/XshhqCryp49Vb7GziVCUDyVpMTTE+E05kml+L5zp1bZVDq/bcyYv7zIZES0CVvQt/qrB5f0Ebg\n' +
              'Td6xQwAzlFd+z3Vd0R+CGTSzCM4u0BHoAf7CnBfsIUiZSoQcAW4T3Bl0RlTEATZB109SaymyMZuW\n' +
              'Zol4hp2pO4dch+CrOx3Aqpy8Dvt3FbrVAfuwA51+2IHuaQfmpx0Yqk+xn6xcy8NmMlrh5tzQCGOc\n' +
              'PWQev7UFHQXxXLJGofzFJxisRMIHyihUHL2Ruw4YPRZaUFvCxyhAodC0A7zZzxY+FEn8mYW/zlQn\n' +
              'DcDL9ADrmARnEYAHdIy5HpxVAAT0wOL594chQ5ApRJws2kx9wgDOQZcx/hX3k0qyhqDrrRlZQgX6\n' +
              'ocq3Xe8GYddylz0We67gczXbXmu82QkDCPZEArnHG3sBUSr1XpN9SlC5miG13l9Iq11sJEhPyS51\n' +
              'yly6rpMmCQJQYVpXopYgAAXANhJE6jnTsxwaCb4pFKBRWx4l+X4o2UCj0BSFRIhjWwFFMjbgp6uI\n' +
              'Y0EAZ61BpPSed+7soKKG2noBbvLnR4TXzEoGgJ9Oh0gjYS9aV3OgRaSNHeu2kZ1LcNUEp08BCbgr\n' +
              'b2TTHZCegs7MunwdRzfRmLzESrPwDYcz2IfweiwWwjQx+PeTxB8qEM+UG0le14v9GuP7QURNzxZk\n' +
              '6Mp799ferji0RDodrm9+l3xDvINBZZPiOoMqTFVXGUr4VxnK+E1fcVXhdzWXgMQ0tzpObTJVTDt9\n' +
              '5VcJb3nq1pTVTvCbxx6JGgpGWUd0YlM0wW9CMVI2mEs74j7mS6wW13+dsPYVnETF6bbfPngnrNHj\n' +
              'uxesPUHLOM33/bDivz1pvwFpJhpiuTDDXwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNC0xMS0yM1Qx\n' +
              'NDoxODowMCswMDowMJCjfg0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjQtMTEtMjNUMTQ6MTg6MDAr\n' +
              'MDA6MDDh/saxAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI0LTExLTIzVDE0OjE4OjAwKzAwOjAw\n' +
              'tuvnbgAAAABJRU5ErkJggg==" />\n' +
              '</svg>'
        },
        link: 'https://gitcode.com/Charles_7c'
      },
      {
        icon: {
          svg: '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1590" width="200" height="200"><title>Gitee</title><path d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62000001 189.62000001 0 0 0-189.62000001 189.645V771.15c0 13.977 11.31600001 25.293 25.29400001 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z" fill="#C71D23" p-id="1591"></path></svg>'
        },
        link: 'https://gitee.com/Charles7c'
      },
      { icon: 'github', link: 'https://github.com/Charles7c' },
    ],

    // @ts-ignore
    // 自定义扩展: 元数据
    postMetaConfig: {
      enabled: true,
      tipTime: 100,
      ads: false
    },
    // 自定义扩展: 页脚配置
    footerConfig: {
      showFooter: true, // 是否显示页脚
      icpRecordCode: '你的ICP备案号', // ICP备案号
      publicSecurityRecordCode: '你的联网备案号', // 联网备案号
      copyright: {
        author: 'Charles7c',
        link: 'https://charles7c.top/',
        beginDate: 2016,
      } // 版权信息
    }
  },
  srcExclude: ['README.md']
})
