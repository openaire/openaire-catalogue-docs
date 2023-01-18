// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');
const dotenv = require('dotenv');

// load env variables (see .env file)
const env = dotenv.config();
if (env.error) {
  throw env.error;
}

console.info("ENV VARIABLES:");
console.info(env.parsed);

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OpenAIRE Research Graph Documentation',
  tagline: 'Open Access Infrastructure for Research in Europe',
  url: process.env.URL,
  baseUrl: process.env.BASE_URL, // serve the website at route
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'openaire', // Usually your GitHub org/user name.
  projectName: 'openaire-graph-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        language: ["en"],
        indexBlog: false,
        highlightSearchTermsOnTargetPage: true,
        searchBarShortcutHint: false,
        docsRouteBasePath: "/",
      }),
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // serve the docs at the site's route
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          
          remarkPlugins: [ math ],
          rehypePlugins: [ katex ],
        },
        blog: false,
        // {
        //   showReadingTime: true,
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
	      sitemap: {
          changefreq: 'monthly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],
  // required for katex styling of equations
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'documentation',
        logo: {
          alt: 'OpenAIRE',
          src: 'img/logo.png',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Research graph v5.0',
          // },
          // 
          // documentation version in the navbar
          {
            type: 'docsVersion',
 
            // type: 'docsVersionDropdown',
            position: 'right'
          },
          
          // link to blog, the blog must be enabled first
          // {to: '/blog', label: 'Blog', position: 'left'},
          
          // link to github repo
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'Issues',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'light',
        copyright: `Copyright © ${new Date().getFullYear()} OpenAIRE`,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
