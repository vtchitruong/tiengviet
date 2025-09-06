// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Góc Tiếng Việt',
  tagline: 'Tra cứu từ vựng và ngữ pháp tiếng Việt',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://vtchitruong.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/tiengviet/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'vtchitruong', // Usually your GitHub org/user name.
  projectName: 'tiengviet', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
         
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Góc Tiếng Việt',
        logo: {
          alt: 'Góc Tiếng Việt Logo',
          src: 'img/goc-tieng-viet-logo.png',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Chuyên mục',
          // },
          // {to: '/blog', label: 'Blog', position: 'left'}, uncomment this later if for a blog
          // {
          //   href: 'https://github.com/vtchitruong/tiengviet',
          //   label: 'GitHub',
          //   position: 'right',
          // },
          // Mục 1: Link đến file intro.md
          {
            type: 'doc',
            docId: 'intro', // ID của file intro.md
            position: 'left',
            label: 'Giới thiệu',
          },
          
          // Mục 2: Link đến chuyên mục Ngữ pháp
          {
            type: 'doc',
            docId: 'ngu-phap/cau-truc-de-thuyet', // ID của bài viết đầu tiên trong chuyên mục
            position: 'left',
            label: 'Ngữ pháp',
          },
          
          // Mục 3: Link đến chuyên mục Từ vựng
          {
            type: 'doc',
            docId: 'tu-vung/neu-du-mac-dau', // ID của bài viết đầu tiên trong chuyên mục
            position: 'left',
            label: 'Từ vựng',
          },
          {
            type: 'doc',
            docId: 'thanh-ngu/duoc-voi-doi-tien', // ID của bài viết đầu tiên trong chuyên mục
            position: 'left',
            label: 'Thành ngữ',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Chuyên mục',
            items: [
              {
                label: 'Giới thiệu',
                to: '/docs/intro',
              },
            ],
          },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'X',
          //       href: 'https://x.com/docusaurus',
          //     },
          //   ],
          // },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/facebook/docusaurus',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Góc Tiếng Việt. Tạo bằng Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },

      algolia: {
        // The application ID provided by Algolia
        appId: 'WM1ZKEVCSQ',

        // Public API key: it is safe to commit it
        apiKey: '31221361788343d509c75e82ffa3743f',

        indexName: 'Goc Tieng Viet',

        // Optional: see doc section below
        contextualSearch: true,
      },
    }),

  // for Algolia
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'algolia-site-verification',
        content: '7A28BF167ABB75FF',
      },
    },
  ],
};

export default config;
