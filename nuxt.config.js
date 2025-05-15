// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  imports: {
    dirs: ['stores', 'stores/**', 'composables', 'utils']
  },

  vite: {
    plugins: [tailwindcss()]
  },
  css: ['~/assets/css/main.css'],
  modules: ['@pinia/nuxt', '@nuxt/icon', '@vueuse/nuxt', 'dayjs-nuxt'],
  devtools: { enabled: true },
  ssr: false,
  runtimeConfig: {
    public: {
      jsonBin: process.env.NUXT_JSON_BIN_API_KEY
    }
  },

  plugins: []
});
