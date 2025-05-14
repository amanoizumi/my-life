<template>
  <div>
    <section>
      <div class="tabs tabs-box">
        <input type="radio" name="my_tabs_1" class="tab" aria-label="Editor" />
        <input
          type="radio"
          name="my_tabs_1"
          class="tab"
          aria-label="Preview"
          checked="checked" />
      </div>
    </section>

    <Teleport to="body">
      <Transition name="modal-fade">
        <ModalComponent v-if="modalIsOpen" v-model:modalIsOpen="modalIsOpen">
          12345
        </ModalComponent>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { useStorage } from '@vueuse/core';
import { storeToRefs } from 'pinia';

const store = useCounterStore();
// 使用 storeToRefs 來保持響應性
const { count, doubleCount } = storeToRefs(store);
const { increment, decrement } = store;

// VueUse 的函數可以直接使用，不需要 import
const { x, y } = useMouse();

// const daysjs = useDayjs();
// console.log('daysjs', daysjs);

const modalIsOpen = ref(false);

const now = useNow({
  interval: 1000 // 每秒更新一次
});

const data = useStorage('data');
</script>
<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
