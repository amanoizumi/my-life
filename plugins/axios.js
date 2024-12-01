// plugins/axios.js
import axios from 'axios';

export default defineNuxtPlugin((nuxtApp) => {
  // 自己的 API 實例
  const staticDataApi = axios.create({
    baseURL: 'https://small-bonus-60ef.a0918233246.workers.dev',
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json'
    }
  });

  // 掛載多個實例
  nuxtApp.$axios = {
    staticDataApi
  };
});
