import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Abigail Cho',
  tagline: 'Technical Writing Portfolio',
  favicon: '/img/notebook.png',

  // Set the production url of your site here
  url: 'https://abigail-cho.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'abigail-cho', // Usually your GitHub org/user name.
  projectName: 'abigail-cho.github.io', // Usually your repo name.
  deploymentBranch: 'main',


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
      {
        docs: {
          sidebarPath: './sidebars.ts'
        },
        blog: {
          showReadingTime: true
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/headshot.jpg',
    navbar: {
      title: 'Home',
      logo: {
        alt: 'My Site Logo',
        src: 'img/notebook.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Portfolio',
        },
        {
          href: '/resume',
          label: 'Resume',
          position: 'left',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/abigail-cho',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Contact',
          items: [
            {
              label: 'Email',
              to: 'mailto:abscho@gmail.com'
            },
            {
              label: 'LinkedIn',
              to: 'https://www.linkedin.com/in/abscho/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://www.github.com/abigail-cho',
            }
          ],
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Abigail Cho. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;