module.exports = {
  title: 'Victor Tran',
  tagline: 'The tagline of my site',
  url: 'https://help.vicr123.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/icon.png',
  organizationName: 'vicr123', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'dark'
    },
    navbar: {
      hideOnScroll: true,
      title: 'Victor Tran',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/thebeat/intro',
          activeBasePath: 'docs/thebeat',
          label: 'theBeat',
          position: 'left',
        },
        {
          href: 'https://vicr123.com/',
          label: 'Main Site',
          position: 'right',
        },
      ],
    },
    sidebarCollapsible: false,
    footer: {
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'theBeat',
              to: 'docs/thebeat/intro',
            },
          ],
        },
        {
          title: 'Connect',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/mptGQDJ',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UCCD3mx0y2KSbD0eFJ0WGOBg',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/vicr12345',
            },
          ],
        },
      ],
      copyright: `Copyright © Victor Tran ${new Date().getFullYear()}. Built with <a href="https://docusaurus.io/">Docusaurus.</a> Text available under <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC-BY-SA, v4.0 or later.</a>`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: ['@docusaurus/plugin-ideal-image']
};
