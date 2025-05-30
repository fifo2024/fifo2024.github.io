import * as path from 'path'
import { defineConfig, UserConfig } from 'rspress/config'
import { DefaultThemeConfig } from '@rspress/shared'

import { blogPostResolver } from '@fifo/rspress-plugin-post-resolver'
import { postReadingInfoPlugin } from '@fifo/rspress-plugin-reading-info'
import { markdownPresetsPlugin } from '@fifo/rspress-plugin-markdown-presets'

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: '知否2024',
  description: '知否2024 Blog',
  icon: '/favicon.ico',
  outDir: '../docs',
  builderConfig: {
    source: {
      alias: {
        '@docs': path.join(__dirname, 'docs'),
        '@source': path.join(__dirname, 'source'),
        '@theme': path.join(__dirname, 'theme'),
      },
    },
  },
  themeConfig: {
    friendLinks: [
      {
        name: '知否2024',
        link: 'https://github.com/fifo2024',
      },
    ],
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/fifo2024/' },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24"><path fill="currentColor" d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584l-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path></svg>',
        },
        mode: 'link',
        content: 'https://x.com/',
      },
    ],
    // 关闭所有页面的左侧菜单栏
    sidebar: {},
    // 顶部导航栏
    nav: [
      {
        text: '友情链接',
        link: '/blog/flinks/',
        activeMatch: '/blog/flinks/',
      },
      {
        text: '归档',
        link: '/blog/archives/',
        activeMatch: '/blog/archives/',
      },
      {
        text: '分类',
        link: '/blog/categories/',
        activeMatch: '/blog/categories/',
      },
      {
        text: '标签',
        link: '/blog/tags/',
        activeMatch: '/blog/tags/',
      },
      {
        text: '关于我',
        link: '/about/',
        activeMatch: '/about/',
      },
    ],
    lastUpdated: true,
    lastUpdatedText: '最后编辑时间',
    prevPageText: '上一篇',
    nextPageText: '下一篇',
    outlineTitle: '目录',
    editLink: {
      text: '📝 在 GitHub 上编辑此页',
      docRepoBaseUrl:
        'https://github.com/fifo2024/fifo2024.github.io/tree/main/site/source/',
    },
    searchPlaceholderText: '搜索...',
  },
  globalUIComponents: [],
  route: {
    cleanUrls: false,
  },
  mediumZoom: {
    selector: '.rspress-doc img',
  },
  plugins: [
    blogPostResolver({
      postsDir: path.join(__dirname, 'source/_posts'),
    }),
    postReadingInfoPlugin(),
    markdownPresetsPlugin(),
  ],
} as UserConfig<DefaultThemeConfig>)
