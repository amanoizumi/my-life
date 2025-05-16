import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

import ModuleTemplateStandardFourImageAndText from '~/components/ModuleTemplate/ModuleTemplateStandardFourImageAndText.vue';

import ModuleTemplateStandardImageAndTextOverlay from '~/components/ModuleTemplate/ModuleTemplateStandardImageAndDarkTextOverlay.vue';
import ModulePreviewStandardFourImageAndText from '~/components/ModulePreview/ModulePreviewStandardFourImageAndText.vue';

import ModulePreviewStandardImageAndDarkTextOverlay from '~/components/ModulePreview/ModulePreviewStandardImageAndDarkTextOverlay.vue';

export const useModuleListStore = defineStore('moduleList', () => {
  const blocks = ref([
    {
      id: 'cfa737e7-9c73-4def-b170-6f7bea6ee79f',
      title: 'Standard Four Image & Text',
      componentName: 'StandardFourImageAndText',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/twbus-83dc6.appspot.com/o/images%2Fplayground%2F1747366129995-%E6%88%AA%E5%9C%96%202025-05-16%20%E4%B8%8A%E5%8D%8811.28.22.png?alt=media&token=79a899cd-a922-4274-9a8e-0a7236cf164c'
    },
    {
      id: 'fe21d3f5-6449-487a-8624-d19069d73c3e',
      title: 'Standard Image & Dark Text Overlay',
      componentName: 'StandardImageAndDarkTextOverlay',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/twbus-83dc6.appspot.com/o/images%2Fplayground%2F1747385399127-%E6%88%AA%E5%9C%96%202025-05-16%20%E4%B8%8B%E5%8D%884.49.46.png?alt=media&token=de13a39f-b6e3-4325-8a32-63154086e193'
    }
  ]);

  const searchInputValue = ref('');
  const blocksFiltered = ref([]);

  const componentMap = {
    StandardFourImageAndText: ModuleTemplateStandardFourImageAndText,
    StandardImageAndDarkTextOverlay: ModuleTemplateStandardImageAndTextOverlay
  };

  const componentPreviewMap = {
    StandardFourImageAndText: ModulePreviewStandardFourImageAndText,
    StandardImageAndDarkTextOverlay:
      ModulePreviewStandardImageAndDarkTextOverlay
  };

  const currentSelectedModuleId = ref('');

  const moduleIdMapComponentName = computed(() => {
    if (!currentSelectedModuleId.value) return null;

    const selectedBlock = blocks.value.find(
      (block) => block.id === currentSelectedModuleId.value
    );
    return selectedBlock ? selectedBlock.componentName : null;
  });

  const currentSelectedComponent = computed(() => {
    return componentMap[moduleIdMapComponentName.value];
  });

  const currentSelectedComponentPreview = computed(() => {
    return componentPreviewMap[moduleIdMapComponentName.value];
  });

  function selectModule(moduleId) {
    currentSelectedModuleId.value = moduleId;
  }

  return {
    currentSelectedModuleId,

    blocks,
    searchInputValue,
    blocksFiltered,
    moduleIdMapComponentName,
    currentSelectedComponent,
    currentSelectedComponentPreview,
    selectModule
  };
});
