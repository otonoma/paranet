// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The Paranet',
  favicon: 'img/favicon.ico',
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
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/otonoma/paranet/edit/main/docs',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'), // Link custom.css here
        },
      },
    ],
  ],

  themeConfig: /** @type {import('@docusaurus/preset-classic').ThemeConfig} */ ({
    navbar: {
      title: 'Paranet',
      logo: {
        alt: 'Paranet Logo',
        src: 'img/paranet_logo_light.svg',
        srcDark: 'img/paranet_logo_dark.svg',
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
};

export default config;