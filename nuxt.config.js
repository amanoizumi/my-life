// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  imports: {
    dirs: ['stores']
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxt/icon',
    '@vueuse/nuxt',
    'dayjs-nuxt'
  ],
  devtools: { enabled: true },
  ssr: false,
  runtimeConfig: {
    public: {
      tdx: {
        apiUrl: process.env.NUXT_TDX_API_URL,
        apiKey: process.env.NUXT_TDX_API_KEY,
        apiId: process.env.NUXT_TDX_API_ID
      }
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  plugins: []
});
