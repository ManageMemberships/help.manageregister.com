// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// Shown in the footer so a deploy can be confirmed at a glance: the date this build ran
// and the commit it was built from (GITHUB_SHA is set by the deploy workflow).
const buildDate = new Date().toLocaleDateString('en-US', {
  year: 'numeric', month: 'long', day: 'numeric', timeZone: 'America/Chicago',
});
const buildCommit = (process.env.GITHUB_SHA || 'local').slice(0, 7);

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ManageRegister Knowledge Base',
  tagline: '',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://help.manageregister.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ManageRegister', // Usually your GitHub org/user name.
  projectName: 'ManageRegister', // Usually your repo name.

  trailingSlash: true,
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
        title: 'ManageRegister',
        logo: {
          alt: 'ManageRegister',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Guide',
          },
          {
            to: '/faq', // 👈 This links to src/pages/faq.mdx
            label: 'FAQ',
            position: 'left',
          },
          {
            to: '/changelog', // 👈 This links to src/pages/faq.mdx
            label: 'Change Log',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Socials',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/managememberships',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/managememberships',
              },
              {
                label: 'Twitter',
                href: 'https://x.com/ManMemberships',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ManageMemberships. Last updated ${buildDate} (build ${buildCommit}).`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      algolia: {
        appId: '30VDBWMO15',
        apiKey: '337f8c85eb4a1fafa270a0d46f6a8062',
        indexName: 'help_manageregister_com_30vdbwmo15_pages',
      },
    }),
};

export default config;
