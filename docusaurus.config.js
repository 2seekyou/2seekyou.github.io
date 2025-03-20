// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SeekYou',
  tagline: 'Hello! This is seekyou(*´∀`)~♥',
  favicon: 'img/yanqing.ico',
  deploymentBranch: 'gh-pages',
  // Set the production url of your site here
  url: 'https://2seekyou.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '2seekyou', // Usually your GitHub org/user name.
  projectName: '2seekyou.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  //languages setting
  i18n: {
    defaultLocale: 'en',
    locales: ['en','zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          remarkPlugins: [require('remark-math')],
          rehypePlugins: [require('rehype-katex')],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          remarkPlugins: [require('remark-math')],
          rehypePlugins: [require('rehype-katex')],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },

        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css',
      type: 'text/css',
    },
  ],
  

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-card.png',
      navbar: {
        title: 'SeekYou',
        logo: {
          alt: 'Logo',
          src: 'img/yanqing.svg',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'DocSidebar',
          //   position: 'left',
          //   label: 'Testing',
          // },
          {
            to: '/blog', 
            label: 'Blog', 
            position: 'right'
          },
          {
            label: 'More',
            position: 'right',
            items: [
              { label: 'Note', to: '/docs/skill' },
              { label: 'test', to: '/docs/all-skill-intro' },
            ],
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            to: 'introduce',
            position: 'right',
            label: 'About',
          },
          {
            href: 'https://github.com/cowqer',
            label: 'GitHub',
            position: 'right',
          },
        ],
        
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Record',
            items: [
              {
                label: 'Note',
                to: '/docs/skill',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'All',
                to: '/docs/all-skill-intro',
              },
            ],
          },
          {
            title: 'Contact me',
            items: [
              {
                label: 'QQ',
                href: 'https://qm.qq.com/cgi-bin/qm/qr?k=a2rVCTEuseKHmnnsacgTeZhTzk9Xqk1s',
              },
              {
                label: 'Skype',
                href: 'https://join.skype.com/invite/ybaQadoUcuaJ',
              },
              {
                label: 'bilibili', 
                href: 'https://space.bilibili.com/473511957',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/cowqer',//expected to add some project website
              },
              {
                label: 'GPT(expired)',
                href: 'https://gpt.seekyou.top',
              },
            ],
          },
        ],
        copyright: `Copyright ©2023.12 Seekyou,Built by C.Q.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
    
};

export default config;
