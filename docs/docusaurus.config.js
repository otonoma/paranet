// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Paranet Documentation',
  tagline: 'Get Started',
  favicon: 'img/paranet_favicon.ico',

  url: 'https://docs.paranet.ai',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'paranet', // Default path for Paranet docs
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/your-org/your-project/edit/main/',
          // homePageId: 'index', // Ensure that index.md is used as the homepage
        },
        blog: false, // Disable the blog plugin
        pages: false, // Disable the default pages plugin
      },
    ],
  ],

  // plugins: [
  //   [
  //     '@docusaurus/plugin-content-docs',
  //     {
  //       id: 'paraflow',
  //       path: 'paraflow',
  //       routeBasePath: 'paraflow',
  //       sidebarPath: require.resolve('./sidebarsParaflow.js'),
  //     },
  //   ],
  //   [
  //     '@docusaurus/plugin-content-docs',
  //     {
  //       id: 'paracord',
  //       path: 'paracord',
  //       routeBasePath: 'paracord',
  //       sidebarPath: require.resolve('./sidebarsParacord.js'),
  //     },
  //   ],
  // ],

  themeConfig: /** @type {import('@docusaurus/preset-classic').ThemeConfig} */ ({
    image: 'img/paranet_logo.svg',
    navbar: {
      title: 'Docs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/paranet_logo.svg',
      },
      items: [
        // {
        //   to: 'paranet',
        //   label: 'Paranet',
        //   position: 'left',
        //   // items: [
        //   //   {
        //   //     label: 'v0.0.2',
        //   //     to: 'paranet/0.0.2',
        //   //   },
        //   //   {
        //   //     label: 'v0.0.1',
        //   //     to: 'paranet/0.0.1',
        //   //   },
        //   // ],
        // },
        {
          to: '/getting_started/',
          label: 'Getting Started',
          position: 'left',
        },
        {
          to: '/paraflow',
          label: 'Paraflow',
          position: 'left',
        },
        {
          to: '/developer_tools',
          label: 'Developer Tools',
          position: 'left',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),

  markdown: {
    format: 'mdx',
    mermaid: false,
    mdx1Compat: {
      comments: true,
      admonitions: true,
      headingIds: true,
    },
  },

  baseUrlIssueBanner: true,
  trailingSlash: undefined,
};

export default config;
