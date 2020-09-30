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
      title: 'Victor Tran',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/thebeat/install',
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
      copyright: `Copyright © ${new Date().getFullYear()} Victor Tran. Built with Docusaurus.`,
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
