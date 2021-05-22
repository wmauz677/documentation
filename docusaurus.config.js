/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Weston Mauz',
  tagline: 'Technical, Creative, and Career Portfolio',
  url: 'https://github.com/wmauz677',
  baseUrl: '/documentation/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'wmauz677', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'East Meets Weast',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: '/about',
          label: 'About',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'East Meets Weast',
          items: [
            {
              label: 'Weston Mauz',
              to: 'https://wmauz677.github.io/Mauz-Portfolio-Web/',
            },
            {
              label: 'wmmauz@gmail.com',
              href: 'mailto:wmmauz@gmail.com',
            },
          ],
        },
        {
          title: 'Attributions',
            items: [
              {
                label: 'Docusaurus',
                href: 'https://docusaurus.io/',
              },
              {
                label: 'Freepik',
                href: 'https://www.freepik.com',
              },
              {
                label: 'photo3idea_studio',
                href: 'https://www.flaticon.com/authors/photo3idea-studio',
              },
              {
                label: 'Flaticon',
                href: 'https://www.flaticon.com/',
              },
            ],
        },
      ],
      // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
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
            'https://wmauz677.github.io/documentation/docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
