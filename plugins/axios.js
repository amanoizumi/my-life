// plugins/axios.js
import axios from 'axios';

export default defineNuxtPlugin((nuxtApp) => {
  // 第三方 API 實例
  const thirdPartyApi = axios.create({
    baseURL: 'third-party-api-url',
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json'
    }
  });

  // 自己的 API 實例
  const myApi = axios.create({
    baseURL: 'https://small-bonus-60ef.a0918233246.workers.dev/',
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json'
    }
  });

  // 掛載多個實例
  nuxtApp.$axios = {
    thirdParty: thirdPartyApi,
    myApi
  };
});
