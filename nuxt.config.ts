const DESCRIPTION =
  "Blahaj Land is a free service offering everything from email and Nextcloud to static page hosting, a fast and reliable git forge, collaborative HedgeDoc documents, and even privacy-focused video streaming with Piped and Invidious!";

export default defineNuxtConfig({
  app: {
    head: {
      title: "Blahaj Land",
      meta: [
        { charset: "utf-8" },
        { property: "og:title", content: "Welcome to Blahaj Land!" },
        { property: "og:description", content: DESCRIPTION },
        {
          property: "og:image",
          content:
            "https://blahaj.land/static/api/?type=image&bucket=pictures&file=thumbnail",
        },
        { property: "twitter:card", content: "summary_large_image" },
        {
          property: "twitter:image",
          content:
            "https://blahaj.land/static/api/?type=image&bucket=pictures&file=thumbnail-twitter",
        },
        { property: "twitter:description", content: DESCRIPTION },
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
