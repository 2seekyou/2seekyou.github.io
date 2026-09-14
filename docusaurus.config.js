// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '崔全 Quan Cui',
  tagline: '遥感智能解译研究者',
  favicon: 'img/yanqing.ico',
  url: 'https://cq.seekyou.top',
  baseUrl: '/',
  organizationName: '2seekyou',
  projectName: '2seekyou.github.io',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {onBrokenMarkdownLinks: 'warn'},
  },
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
    localeConfigs: {
      'zh-Hans': {label: '简体中文', htmlLang: 'zh-CN'},
    },
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          blogTitle: '文章与随笔',
          blogDescription: '记录遥感、计算机视觉、工程实践与沿途思考',
          blogSidebarTitle: '近期文章',
          blogSidebarCount: 10,
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          postsPerPage: 8,
        },
        theme: {customCss: './src/css/custom.css'},
        sitemap: {changefreq: 'weekly', priority: 0.5},
      },
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-nB0miv6/jRmo5UMMR1wu3Gz6NLsoTkbqJghGIsxE7V2x1Zl9wYoBCnQEozcwBUPu',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig: {
    image: 'img/academic-social-card.svg',
    metadata: [
      {name: 'keywords', content: '崔全, Quan Cui, 遥感, 计算机视觉, 旋转目标检测, 少样本分割, 湘潭大学'},
      {name: 'author', content: 'Quan Cui'},
      {name: 'robots', content: 'index, follow, max-image-preview:large'},
    ],
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Quan Cui',
      logo: {alt: 'Quan Cui', src: 'img/yanqing.svg'},
      hideOnScroll: false,
      items: [
        {to: '/', label: '首页', position: 'left'},
        {to: '/scholar', label: '学者', position: 'left'},
        {to: '/awards', label: '获奖成果', position: 'left'},
        {to: '/blog', label: '博客', position: 'left'},
        {to: '/docs/all-skill-intro', label: '研究笔记', position: 'left'},
        {to: '/introduce', label: '关于我', position: 'left'},
        {href: 'https://github.com/cowqer', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '学术',
          items: [
            {label: '研究与成果', to: '/scholar'},
            {label: '获奖成果', to: '/awards'},
            {label: '研究博客', to: '/blog/tags/research'},
            {label: '研究笔记', to: '/docs/all-skill-intro'},
          ],
        },
        {
          title: '联系',
          items: [
            {label: 'Email', href: 'mailto:cuiquan@smail.xtu.edu.cn'},
            {label: 'GitHub', href: 'https://github.com/cowqer'},
            {label: 'DBLP', href: 'https://dblp.org/pid/234/7752.html'},
            {label: 'MDR-Net', href: 'https://github.com/cowqer/MDR-Net'},
          ],
        },
        {
          title: '关于',
          items: [
            {label: '个人介绍', to: '/introduce'},
            {label: '湘潭大学', href: 'https://www.xtu.edu.cn/'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Quan Cui. Built with Docusaurus.`,
    },
    prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula},
  },
};

export default config;
