<template>
  <div class="container mx-auto p-4">
    <!-- 頂部控制區 -->

    <div class="flex mb-8">
      <div class="flex-1">
        <h1 class="text-4xl font-bold">新書列表</h1>
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
      <span>{{ error }}</span>
    </div>

    <!-- 成功提示 -->
    <div v-if="successMessage" class="alert alert-success mb-4 text-white">
      <span>{{ successMessage }}</span>
    </div>

    <!-- 續集新書列表 table -->
    <section class="mb-6">
      <h2 class="font-bold text-2xl mb-3">要買的續集新書列表</h2>
      <div class="overflow-x-auto">
        <table class="table table-zebra">
          <!-- head -->
          <thead>
            <tr>
              <th class="w-full">書名</th>
              <th class="min-w-32">出版日期</th>
              <th class="min-w-32">售價</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="book in filteredData" :key="book.title" class="hover">
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
    </section>

    <div
      v-if="!isLoading && (!filteredData || filteredData.length === 0)"
      class="alert my-8">
      <span>尚無資料</span>
    </div>
    <section>
      <!-- 新書籍列表 table -->
      <h2 class="font-bold text-2xl mb-3">新書籍列表</h2>
      <div class="overflow-x-auto">
        <table class="table table-zebra">
          <!-- head -->
          <thead>
            <tr>
              <th class="w-full">書名</th>
              <th class="min-w-32">出版日期</th>
              <th class="min-w-32">售價</th>
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
    </section>

    <!-- 無資料提示 -->
    <div v-if="!isLoading && (!books || books.length === 0)" class="alert my-8">
      <span>尚無資料</span>
    </div>
  </div>
</template>

<script setup>
const dayjs = useDayjs();
const books = ref([]);
const isLoading = ref(false);
const error = ref('');
const successMessage = ref('');

// 觸發新的爬蟲
const handleCrawl = async () => {
  try {
    isLoading.value = true;
    error.value = '';
    successMessage.value = '';

    const crawlResponse = await $fetch('/api/crawl');
    console.log('crawlResponse', crawlResponse);

    if (crawlResponse.success) {
      successMessage.value = '更新成功！';
    } else {
      error.value = '更新失敗';
    }
  } catch (err) {
    error.value = '發生錯誤: ' + err.message;
  } finally {
    isLoading.value = false;
  }
};

// const localBooks = useLocalStorage('localBook');

const bookArray = ['關於我', '黃泉使者'];

const filteredData = computed(() => {
  return books.value.filter((book) =>
    bookArray.some((keyword) => book.title.includes(keyword))
  );
});

onMounted(async () => {
  const res = await $fetch('/api/books');
  console.log('res', res);
  console.log('dayjs', dayjs);
  books.value = res;
  //   if (!localBooks.value) {
  //     const res = await $fetch('/api/books');
  //     console.log('res', res);
  //     localBooks.value = JSON.stringify(res);
  //     books.value = res;
  //   } else {
  //     books.value = JSON.parse(localBooks.value);
  //     console.log('books.value', books.value);
  //   }
});
</script>
