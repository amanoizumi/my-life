<template>
  <div class="container mx-auto px-4 mb-4">
    <h2 class="font-bold text-2xl mb-3">
      {{ store.headline }}
    </h2>
    <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      <li v-for="item in store.list" :key="item.order">
        <div class="card bg-base-100 shadow-sm h-full">
          <figure>
             
            <img
              class="w-full h-full aspect-square object-cover"
              :src="
                item.imgUrl ||
                'https://skytechai.s3.us-west-002.backblazeb2.com/uy415b93xzq6ez8ejbuf02kezyxt_websitenoimages02jpgjpg.jpg'
              "
              alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">{{ item.headline }}</h2>
            <p>
              {{ item.bodyText }}
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { useModuleTemplateFourImageAndTextStore } from '~/stores/blockModules/moduleTemplateFourImageAndText.js';

const store = useModuleTemplateFourImageAndTextStore();
</script>
