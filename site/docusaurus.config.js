// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The Paranet',
  favicon: 'img/paranet_favicon.ico',
  url: 'https://paranet.otonoma.com/',
  baseUrl: '/',
  trailingSlash: false,

  baseUrlIssueBanner: true,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  organizationName: 'grokit-data',
  projectName: 'paranet',
  deploymentBranch: 'gh-pages',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs', // Default path for Paranet docs
          routeBasePath: 'docs', // Serve the docs at the site's root
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/otonoma/paranet/edit/main/docs',
          // homePageId: 'index', // Ensure that index.md is used as the homepage
        },
        blog: false, // Disable the blog plugin
        // pages: false, // Disable the default pages plugin
      },
    ],
  ],

  plugins: [
    // Add this custom plugin to load Root.js globally
    // function customRootPlugin() {
    //   return {
    //     name: 'custom-root-plugin',
    //     getClientModules() {
    //       return [require.resolve('./src/root.js')];
    //     },
    //   };
    // },
    // [
    //   '@docusaurus/plugin-content-docs',
    //   {
    //     id: 'paraflow',
    //     path: 'paraflow',
    //     routeBasePath: 'paraflow',
    //     sidebarPath: require.resolve('./sidebarsParaflow.js'),
    //   },
    // ],
    // [
    //   '@docusaurus/plugin-content-docs',
    //   {
    //     id: 'paracord',
    //     path: 'paracord',
    //     routeBasePath: 'paracord',
    //     sidebarPath: require.resolve('./sidebarsParacord.js'),
    //   },
    // ],
  ],

  themeConfig: /** @type {import('@docusaurus/preset-classic').ThemeConfig} */ ({
    image: 'img/paranet_logo.svg',
    navbar: {
      title: 'The Paranet',
      logo: {
        alt: 'My Site Logo',
        src: 'img/paranet_logo.svg',
      },
      items: [
        {
          to: '/docs',
          label: 'Docs',
          position: 'right',
        },
        {
          to: 'https://www.otonoma.com/',
          label: 'Otonoma',
          position: 'right',
          target: '_self',
        },

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

  stylesheets: [
    '/css/custom.css', // Add custom stylesheet
  ],
};

export default config;
