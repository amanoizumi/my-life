// services/api.js
import { useNuxtApp } from 'nuxt/app';

// 創建一個函數來獲取 axios 實例
const useApi = () => {
  const { $axios } = useNuxtApp();

  return {
    staticDataService: {
      getData: (params) =>
        $axios.staticDataApi.get('', {
          params
        }),
      postData: (data) => $axios.staticDataApi.post('/data', data)
    }
  };
};

export default useApi;
