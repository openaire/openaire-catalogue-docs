// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OpenAIRE Documentation',
  tagline: 'Open Access Infrastructure for Research in Europe',
  url: 'http://snf-23385.ok-kno.grnetcloud.net',
  baseUrl: '/openaire/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'schatzopoulos', // Usually your GitHub org/user name.
  projectName: 'openaire-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          // routeBasePath: '/', // serve the docs at the site's route

          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        // title: 'OpenAIRE Documentation',
        logo: {
          alt: 'OpenAIRE',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Research graph',
          },
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'docs',
          // },
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Research Graph',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Dashboards',
            items: [
              {
                label: 'Explore',
                href: 'https://explore.openaire.eu/',
              },
              {
                label: 'Provide',
                href: 'https://provide.openaire.eu/',
              },
              {
                label: 'Connect',
                href: 'https://connect.openaire.eu/',
              },
              {
                label: 'Monitor',
                href: 'https://monitor.openaire.eu/',
              },
              {
                label: 'Develop',
                href: 'https://graph.openaire.eu/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              { 
                label: 'Facebook',
                href: 'http://www.facebook.com/groups/openaire/'
              },
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/company/openaire-eu/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/OpenAIRE_eu',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/channel/UChFYqizc-S6asNjQSoWuwjw',
              },
            ],
          },
          
        ],
        copyright: `Copyright © ${new Date().getFullYear()} OpenAIRE`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
