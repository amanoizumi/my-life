import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

import ModuleTemplateFourImageAndText from '~/components/ModuleTemplate/ModuleTemplateFourImageAndText.vue';

import ModulePreviewFourImageAndText from '~/components/ModulePreview/ModulePreviewFourImageAndText.vue';

import ModuleTemplateBanner from '~/components/ModuleTemplate/ModuleTemplateBanner.vue';

import ModulePreviewBanner from '~/components/ModulePreview/ModulePreviewBanner.vue';

export const useModuleListStore = defineStore('moduleList', () => {
  const blocks = ref([
    {
      id: 'cfa737e7-9c73-4def-b170-6f7bea6ee79f',
      title: 'Four Image & Text',
      componentName: 'FourImageAndText',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/twbus-83dc6.appspot.com/o/images%2Fplayground%2F1747978439009-%E6%88%AA%E5%9C%96%202025-05-23%20%E4%B8%8B%E5%8D%881.33.45.png?alt=media&token=c4025007-c54c-4a34-aed7-aea1d5d917b0'
    },
    {
      id: 'fe21d3f5-6449-487a-8624-d19069d73c3e',
      title: 'Banner',
      componentName: 'Banner',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/twbus-83dc6.appspot.com/o/images%2Fplayground%2F1747385399127-%E6%88%AA%E5%9C%96%202025-05-16%20%E4%B8%8B%E5%8D%884.49.46.png?alt=media&token=de13a39f-b6e3-4325-8a32-63154086e193'
    }
  ]);

  const searchInputValue = ref('');
  const blocksFiltered = ref([]);

  const componentMap = {
    FourImageAndText: ModuleTemplateFourImageAndText,
    Banner: ModuleTemplateBanner
  };

  const componentPreviewMap = {
    FourImageAndText: ModulePreviewFourImageAndText,
    Banner: ModulePreviewBanner
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
