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
          { text: "Clock Bot", link: "/docs/clockDocs.md" },
        ],
      }],
    },

    search: {
      provider: "local",
    },
    footer: {
      message: "In this US election our civil rights are on the line, if you are eligible, make a plan to vote at https://iwillvote.com/.",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/whiskers-chat" },
    ],
  },
});
