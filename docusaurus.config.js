module.exports = {
  title: 'ChrisDevCode',
  tagline: 'My Technical Docs',
  url: 'https://chrisdocs.vercel.app/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'ChrisAchinga',
  projectName: 'chris.docs', 
  themeConfig: {
    navbar: {
      title: 'CdC',
      logo: {
        alt: 'CdC Brands',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/doc1',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/ChrisAchinga',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/chris-achinga-001/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/achinga_chris',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/chrisdevcode/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              href: 'https://chrisdev.hashnode.dev/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ChrisAchinga',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ChrisDevCode`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
