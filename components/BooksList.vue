<template>
  <div class="container mx-auto p-4">
    <!-- 頂部控制區 -->

    <div class="navbar bg-base-100 rounded-box shadow-lg mb-6">
      <div class="flex-1">
        <h1 class="text-2xl font-bold">新書列表</h1>
      </div>
      <div class="flex-none">
        <button
          :class="['btn', isLoading ? 'btn-disabled loading' : 'btn-primary']"
          :disabled="isLoading"
          @click="handleCrawl">
          {{ isLoading ? '爬取中...' : '更新資料' }}
        </button>
      </div>
    </div>

    <!-- 載入中提示 -->
    <div v-if="isLoading" class="flex justify-center my-4">
      <span class="loading loading-spinner loading-lg"></span>
    </div>

    <!-- 錯誤提示 -->
    <div v-if="error" class="alert alert-error mb-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="stroke-current shrink-0 h-6 w-6"
        fill="none"
        viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span>{{ error }}</span>
    </div>

    <!-- 成功提示 -->
    <div v-if="successMessage" class="alert alert-success mb-4 text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="stroke-current shrink-0 h-6 w-6"
        fill="none"
        viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span>{{ successMessage }}</span>
    </div>

    <!-- 書籍列表 table -->
    <div class="overflow-x-auto">
      <table class="table table-zebra">
        <!-- head -->
        <thead>
          <tr>
            <th>書名</th>
            <th class="w-32">出版日期</th>
            <th>售價</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="book in books" :key="book.title" class="hover">
            <td>{{ book.title }}</td>
            <td>
              <div class="text-xs">{{ book.publishDate }}</div>
            </td>
            <td>
              <div class="text-xs">NT$ {{ book.price }}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 無資料提示 -->
    <div v-if="!isLoading && (!books || books.length === 0)" class="alert my-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="stroke-info shrink-0 w-6 h-6">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      <span>尚無資料</span>
    </div>
  </div>
</template>

<script setup>
import { useLocalStorage } from '@vueuse/core';

const books = ref([]);
const isLoading = ref(false);
const error = ref('');
const successMessage = ref('');

// 從 API 獲取資料

// 觸發新的爬蟲
const handleCrawl = async () => {
  try {
    isLoading.value = true;
    error.value = '';
    successMessage.value = '';

    const { data, refresh } = await useFetch('/api/crawl');

    if (data.value?.success) {
      successMessage.value = data.value.message || '更新成功！';
      await refresh();
    } else {
      error.value = data.value?.error || '更新失敗';
    }
  } catch (err) {
    error.value = '發生錯誤: ' + err.message;
  } finally {
    isLoading.value = false;
  }
};

const localBooks = useLocalStorage('localBook');

onMounted(async () => {
  if (!localBooks.value) {
    const res = await $fetch('/api/books');
    localBooks.value = JSON.stringify(res);
    books.value = res;
  } else {
    books.value = JSON.parse(localBooks.value);
  }
});
</script>
