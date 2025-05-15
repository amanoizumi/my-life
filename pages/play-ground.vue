<template>
  <div class="pt-10 pb-32">
    <section class="container mx-auto px-4 mb-4">
      <h2 class="text-3xl mb-4">Web Page Name - {{ webpageNane }}</h2>
      <div class="tabs tabs-lift">
        <input
          type="radio"
          v-model="tab"
          value="Editor"
          name="editorTab"
          class="tab"
          aria-label="Editor"
          checked="checked" />
        <input
          v-model="tab"
          value="Preview"
          type="radio"
          name="editorTab"
          class="tab"
          aria-label="Preview" />
      </div>
    </section>

    <section v-if="!moduleListStore.currentSelectedModuleId">
      <emptyModuleSection />
    </section>

    <section
      class="container mx-auto px-4 mb-4"
      v-if="moduleListStore.currentSelectedModuleId"
      v-show="tab === 'Editor'">
      <component :is="moduleListStore.currentSelectedComponent" />
    </section>

    <section
      class="container mx-auto px-4 mb-4"
      v-show="moduleListStore.currentSelectedModuleId && tab === 'Preview'">
      <ModulePreviewStandardFourImageAndText />
    </section>
  </div>
</template>

<script setup>
import { useStorage } from '@vueuse/core';
import { storeToRefs } from 'pinia';

const moduleListStore = useModuleListStore();
const webpageNane = ref('Animal Fes');
const tab = ref('Editor');

const toggleTab = (tabName = 'Editor') => {
  tab.value = tabName;
};

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
