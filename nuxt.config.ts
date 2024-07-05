import blahajInfo from "./assets/data/info";

export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  app: {
    baseURL: blahajInfo.defaultPath,
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: blahajInfo.title,
      meta: [
        { charset: "utf-8" },
        { name: "description", content: blahajInfo.description },
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
          rel: "preconnect",
          crossorigin: "anonymous",
          href: "https://assets.blahaj.land/",
        },
        {
          rel: "preconnect",
          crossorigin: "anonymous",
          href: "https://fonts.googleapis.com/",
        },
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
  modules: ["@nuxt/eslint", "@nuxt/image"],
  image: {
    screens: {
      mb: 200,
      dt: 1200,
    },
    domains: ["static.blahaj.land"],
  },
  compatibilityDate: "2024-07-04",
});
