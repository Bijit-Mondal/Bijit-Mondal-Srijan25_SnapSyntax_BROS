import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Naam Bataiye?",
  description: "Portfolio website for snapsyntax",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About Me', link: '/about-me' },
      { text: 'Skills', link: '/skills' },
      { text: 'Projects', link: '/projects' },
      { text: 'Contact', link: '/contact' }
    ],

    sidebar: [
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
