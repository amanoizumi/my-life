<template>
  <div class="py-10">
    <section class="container mx-auto px-4 mb-4">
      <div class="tabs tabs-lift">
        <input
          type="radio"
          name="editorTab"
          class="tab"
          aria-label="Editor"
          checked="checked" />
        <input type="radio" name="editorTab" class="tab" aria-label="Preview" />
      </div>
    </section>

    <section>
      <emptyModuleSection />
    </section>
  </div>
</template>

<script setup>
import { useStorage } from '@vueuse/core';
import { storeToRefs } from 'pinia';

const now = useNow({
  interval: 1000 // 每秒更新一次
});
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
