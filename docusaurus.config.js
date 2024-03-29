const projects = require("./src/projects");

module.exports = {
    title: 'Victor Tran',
    tagline: 'The tagline of my site',
    url: 'https://help.vicr123.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    favicon: 'img/icon.png',
    organizationName: 'vicr123', // Usually your GitHub org/user name.
    projectName: 'docs', // Usually your repo name.
    i18n: {
        defaultLocale: "en",
        locales: ["en", "vi"]
    },
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
                ...projects.projects.filter(project => project.type === projects.types.flagship).map(project => ({
                    type: "doc",
                    label: project.name,
                    docId: project.startId,
                    docsPluginId: project.id,
                    position: "left"
                })),
                {
                    type: "dropdown",
                    label: "More",
                    items: projects.projects.filter(project => project.type === projects.types.main).map(project => ({
                        type: "doc",
                        label: project.name,
                        docId: project.startId,
                        docsPluginId: project.id
                    })),
                    position: "left"
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
                        ...projects.projects.filter(project => project.type === projects.types.flagship).map(project => ({
                            label: project.name,
                            to: project.start,
                        })),
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
        algolia: {
            appId: "PHJS4UJUIB",
            apiKey: "65f017cadc35f98a9fcc13fa5ea990a4",
            indexName: "help-vicr123"
        }
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: false,
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
    plugins: [
        '@docusaurus/plugin-ideal-image',
        ...projects.projects.map(project => ([
            "@docusaurus/plugin-content-docs",
            {
                id: project.id,
                path: project.basePath,
                routeBasePath: project.basePath,
                sidebarPath: require.resolve(`./sidebars/${project.id}-sidebar.js`),
                versions: {
                    current: {
                        label: "Blueprint"
                    }
                }
            }
        ]))
    ]
};
