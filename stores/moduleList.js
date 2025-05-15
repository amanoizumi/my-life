import { defineStore } from 'pinia';
import { ref } from 'vue';

import ModuleTemplateStandardFourImageAndText from '~/components/ModuleTemplate/ModuleTemplateStandardFourImageAndText.vue';

export const useModuleListStore = defineStore('moduleList', () => {
  const blocks = ref([
    {
      id: 'cfa737e7-9c73-4def-b170-6f7bea6ee79f',
      title: 'Standard Four Image & Text',
      componentName: 'StandardFourImageAndText',
      imageUrl:
        'https://images.unsplash.com/photo-1746471626032-d5dd71f0ba9c?q=80&w=2282&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 'fe21d3f5-6449-487a-8624-d19069d73c3e',
      title: 'Standard Image & Dark empty-moduleText Overlay',
      componentName: 'StandardImageAndDarkEmptyModuleTextOverlay',
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1720380988344-1fce88bc53a6?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ]);

  const componentMap = {
    StandardFourImageAndText: ModuleTemplateStandardFourImageAndText
  };

  const currentSelectedModuleId = ref('');

  const moduleIdMapComponentName = computed(() => {
    if (!currentSelectedModuleId.value) return null;

    const selectedBlock = blocks.value.find(
      (block) => block.id === currentSelectedModuleId.value
    );
    return selectedBlock ? selectedBlock.componentName : null;
  });

  const currentSelectedComponent = computed(
    () => componentMap[moduleIdMapComponentName.value]
  );

  function selectModule(moduleId) {
    currentSelectedModuleId.value = moduleId;
  }

  return {
    currentSelectedModuleId,
    blocks,
    moduleIdMapComponentName,
    currentSelectedComponent,
    selectModule
  };
});
