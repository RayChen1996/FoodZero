// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["/assets/css/main.css", "aos/dist/aos.css"],
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Rufina: [400, 700], // Regular and Bold
      Lato: [300, 400, 700], // Light, Regular, Bold
    },
    display: "swap", // 確保字體載入期間可以正常顯示
  },
  plugins: [
    {
      src: "~/plugins/aos.js",
      mode: "client",
    },
  ],
  app: {
    head: {
      title: "FoodZero-Resturant Web",
      meta: [
        {
          name: "",
          content: "",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Rufina:wght@400;700&display=swap",
        },
      ],
    },
  },
});
