<template>
  <div>
    <p>Index</p>
    <div class="text-center p-4 bg-blue-500 text-white">Hello Tailwind!</div>
    <div>
      <p>Count: {{ count }}</p>
      <p>Double: {{ doubleCount }}</p>
      <button @click="increment">+1</button>
      <button @click="decrement">-1</button>
      <Icon
        name="material-symbols:family-star-sharp"
        class="text-2xl text-indigo-600" />
      <br />
      <div>
        <p>Mouse position: {{ x }}, {{ y }}</p>
        <p>Is dark: {{ isDark }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import useApi from '~/services/api';

const api = useApi();

const store = useCounterStore();
// 使用 storeToRefs 來保持響應性
const { count, doubleCount } = storeToRefs(store);
const { increment, decrement } = store;

// VueUse 的函數可以直接使用，不需要 import
const { x, y } = useMouse();
const isDark = useDark();
const res = await api.staticDataService.getData();
console.log('res', res);
</script>
