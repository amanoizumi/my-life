<template>
  <div>
    <h2 class="font-bold text-2xl mb-3">
      {{ store.headline }}
    </h2>
    <div
      v-for="item in store.list"
      :key="item.order"
      class="hero min-h-[600px]"
      style="
        background-image: url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp);
      ">
      <div class="hero-overlay"></div>
      <div class="hero-content text-neutral-content text-center">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">{{ item.headline }}</h1>
          <p class="mb-5">
            {{ item.bodyText }}
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useModuleTemplateStandardImageAndDarkTextOverlay } from '~/stores/blockModules/moduleTemplateStandardImageAndDarkTextOverlay.js';

const store = useModuleTemplateStandardImageAndDarkTextOverlay();
</script>
