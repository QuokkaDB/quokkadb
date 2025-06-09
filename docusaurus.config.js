// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'QuokkaDB Documentation',
  tagline: 'QuokkaDB, A JSON-based Database',
  favicon: 'img/favicon.ico',
  projectName: "QuokkaDB",
  organizationName: "QuokkaDB",

  // Set the production url of your site here
  url: 'https://QuokkaDB.pages.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

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
      image: 'img/logo_optimized.png',
      navbar: {
        title: 'QuokkaDB',
        logo: {
          alt: 'Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'Documentation',
            position: 'left',
            label: 'Documentation',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} QuokkaDB, Inc. Built with Docusaurus!`,
      },
      metadata: [
        { name: 'description', content: 'QuokkaDB, A blazing fast JSON-based database' },
        { name: 'keywords', content: 'database, db, quokkaDB, json database, sql alternative, mongodb alternative' },
        { property: 'og:title', content: 'QuokkaDB Documentation, JSON Database' },
        { property: 'og:description', content: 'QuokkaDB, A blazing fast JSON-based database' },
        { property: 'og:image', content: 'img/logo_optimized.png' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://QuokkaDB.pages.dev' },
      ],
      prism: {
        theme: prismThemes.oneLight,
        darkTheme: prismThemes.oneDark,
      },
    }),
};

export default config;
