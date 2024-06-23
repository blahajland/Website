import blahajInfo from "./assets/data/info";

export default defineNuxtConfig({
  app: {
    baseURL: blahajInfo.defaultPath,
    head: {
      title: blahajInfo.title,
      meta: [
        { charset: "utf-8" },
        { property: "og:title", content: blahajInfo.catchphrase },
        { property: "og:description", content: blahajInfo.description },
        { property: "og:image", content: blahajInfo.image },
        { property: "twitter:card", content: "summary_large_image" },
        { property: "twitter:image", content: blahajInfo.twitterImage },
        { property: "twitter:description", content: blahajInfo.description },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://assets.blahaj.land/css/colors.css",
        },
        {
          rel: "icon",
          href: "https://assets.blahaj.land/pictures/favicon.png",
        },
      ],
    },
  },
  css: ["@/assets/style/main.sass"],
  modules: ["@nuxt/eslint"],
});
