// services/api.js
import { useNuxtApp } from 'nuxt/app';

// 創建一個函數來獲取 axios 實例
const useApi = () => {
  const { $axios } = useNuxtApp();

  return {
    thirdPartyService: {
      getData: (params) => $axios.thirdParty.get('/data', { params }),
      postData: (data) => $axios.thirdParty.post('/data', data)
    },

    myService: {
      getData: (params) => $axios.myApi.get('/', { params }),
      postData: (data) => $axios.myApi.post('/data', data)
    }
  };
};

export default useApi;
