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
        { to: 'blog', label: 'Blog', position: 'left' },
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
              label: 'Articles',
              to: 'docs/articles',
            },
            {
              label: 'Technical Blog',
              href: 'https://chrisdev.hashnode.dev/',
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
          editUrl: 'https://github.com/ChrisAchinga/chris.docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/ChrisAchinga/chris.docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
