export default {
  title: 'armory',
  description: 'frontend development tool set',
  appearance: false,
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: '',
    docsDir: 'docs',
    outlineTitle: '#',
    repo: 'https://github.com/mewcoder/fe-armory',
    footer: {
      copyright: 'Copyright © 2022 mewcoder'
    },
    sidebar: {
      '/': []
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/mewcoder/fe-armory' }]
  }
};
