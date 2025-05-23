<template>
  <div>
    <h2 class="font-bold text-2xl mb-3">
      {{ store.headline }}
    </h2>
    <div
      v-for="item in store.list"
      :key="item.order"
      class="hero min-h-[600px]"
      :style="{
        backgroundImage: `url(${item.imgUrl})`
      }">
      <div class="hero-overlay"></div>
      <div class="hero-content text-neutral-content text-center">
        <div class="max-w-md flex flex-col gap-y-5">
          <h1 class="text-5xl font-bold">{{ item.headline }}</h1>
          <p>
            {{ item.bodyText }}
          </p>
          <a
            v-if="item.buttonText"
            :href="item.buttonUrl || '#'"
            class="btn btn-primary">
            {{ item.buttonText }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useModuleTemplateBannerStore } from '~/stores/blockModules/moduleTemplateBanner.js';

const store = useModuleTemplateBannerStore();
</script>
