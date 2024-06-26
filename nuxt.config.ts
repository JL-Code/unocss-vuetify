// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@unocss/nuxt", "vuetify-nuxt-module"],
  unocss: {
    uno: true,
    attributify: true,
  },
  css: ["vue-final-modal/style.css"],
  devtools: { enabled: true },
});
