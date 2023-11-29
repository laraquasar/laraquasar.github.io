import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "LaraQuasar",
    description: "Support for Laravel + Quasar Framework",
    logo: "https://github.com/laraquasar.png",
    appearance: "force-dark",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "Home", link: "/" },
            { text: "Get Started", link: "/guide/getting-started" },
        ],

        socialLinks: [
            {
                icon: "github",
                link: "https://github.com/laraquasar/laraquasar",
            },
        ],
    },
});
