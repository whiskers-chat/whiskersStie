import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Whiskers",
  description: "A meower client & bot maker",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Team", link: "/team.md" },
      { text: "Docs", link: "/docs/main.md" },
    ],

    sidebar: {
      "/docs/": [{
        text: "Docs",
        items: [
          { text: "Clock Bot", link: "/docs/clock/main.md" },
        ],
      }],
    },

    search: {
      provider: "local",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/whiskers-chat" },
    ],
  },
});
