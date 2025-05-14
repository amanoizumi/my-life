// stores/counter.js
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useModuleListStore = defineStore('moduleList', () => {
  const blocks = ref([
    {
      id: 'cfa737e7-9c73-4def-b170-6f7bea6ee79f',
      title: 'Standard Four Image & Text',
      imageUrl:
        'https://images.unsplash.com/photo-1746471626032-d5dd71f0ba9c?q=80&w=2282&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
    // {
    //   id: "fe21d3f5-6449-487a-8624-d19069d73c3e",
    //   title: "Standard Image & Dark empty-moduleText Overlay",
    //   imageUrl:
    //     "https://plus.unsplash.com/premium_photo-1720380988344-1fce88bc53a6?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    // }
  ]);

  return {
    blocks
  };
});
