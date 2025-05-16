// moduleTemplateStandardFourImageAndText.js
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useModuleTemplateStandardImageAndDarkTextOverlay = defineStore(
  'moduleTemplateStandardImageAndDarkTextOverlay',
  () => {
    /*
    https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=2630&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D

    https://plus.unsplash.com/premium_photo-1697263437649-3a008f45e46b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmVzdHxlbnwwfHwwfHx8MA%3D%3D

    https://images.unsplash.com/photo-1588156842490-8d7fdb1ce349?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D


    https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQVfvf-8C9WL0l2bL3_cr_XbjsCIsrkzZgUQIfs295s1h5Z3Hs2hUA8bqv4esGiSILBikJhm9JhqEYtTlvEMbYarA

    */
    const headline = ref('');
    const list = ref([
      {
        order: 1,
        headline: 'Headline',
        bodyText: 'Cute Cat',
        imgUrl: '',
        buttonText: 'Get Started',
        buttonUrl: '/'
      }
    ]);

    const reset = () => {
      headline.value = '';
      list.value = [
        {
          order: 1,
          headline: 'Headline',
          bodyText: 'Cute Cat',
          imgUrl: '',
          buttonText: 'Get Started',
          buttonUrl: '/'
        }
      ];
    };

    return {
      // state
      headline,
      list,

      // method
      reset
    };
  }
);
