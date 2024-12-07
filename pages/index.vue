<template>
  <div>
    <p>Index</p>

    <div>
      <button class="btn">Hello daisyUI</button>
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
      </div>
      <div>
        {{ now }}
      </div>
      <div>
        <input v-model="data" type="text" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStorage } from '@vueuse/core';
import { storeToRefs } from 'pinia';
import useApi from '~/services/api';
const api = useApi();

const store = useCounterStore();
// 使用 storeToRefs 來保持響應性
const { count, doubleCount } = storeToRefs(store);
const { increment, decrement } = store;

// VueUse 的函數可以直接使用，不需要 import
const { x, y } = useMouse();
const res = await api.staticDataService.getData();

console.log('res', res);

const now = useNow({
  interval: 1000 // 每秒更新一次
});

const data = useStorage('data');
</script>
