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
  modules: [
    '@pinia/nuxt',
    '@nuxt/icon',
    '@vueuse/nuxt',
    'dayjs-nuxt',
    'nuxt-lodash'
  ],
  devtools: { enabled: true },
  ssr: false,
  runtimeConfig: {
    public: {
      jsonBin: process.env.NUXT_JSON_BIN_API_KEY,
      firebaseApiKey: process.env.FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.FIREBASE_APP_ID,
      firebaseMeasurementId: process.env.FIREBASE_MEASUREMENT_ID
    }
  },

  plugins: []
});
