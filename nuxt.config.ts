import BlahajInfo from "./assets/data/info";

export default defineNuxtConfig({
  app: {
    baseURL: BlahajInfo.defaultPath,
    head: {
      title: BlahajInfo.title,
      meta: [
        { charset: "utf-8" },
        { property: "og:title", content: BlahajInfo.catchphrase },
        { property: "og:description", content: BlahajInfo.description },
        { property: "og:image", content: BlahajInfo.image },
        { property: "twitter:card", content: "summary_large_image" },
        { property: "twitter:image", content: BlahajInfo.twitterImage },
        { property: "twitter:description", content: BlahajInfo.description },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://blahaj.land/static/api/?type=css&file=colors",
        },
        {
          rel: "icon",
          href: "https://blahaj.land/static/api/?type=image&bucket=pictures&file=favicon",
        },
      ],
    },
  },
  css: ["@/assets/style/main.sass"],
  modules: ["@nuxt/eslint"],
});
