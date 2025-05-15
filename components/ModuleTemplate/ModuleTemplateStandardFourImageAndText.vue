<template>
  <div>
    <div class="flex justify-between">
      <h2 class="text-xl font-semibold">Standard Four Image & Text</h2>
      <button type="button" class="btn btn-circle leading-none w-7 h-7 m-1">
        x
      </button>
    </div>

    <hr class="mb-2" />

    <div class="mb-6">
      <h3 class="text-lg font-medium">Headline</h3>
      <form>
        <div>
          <input
            type="text"
            class="input"
            v-model="moduleTemplateStandardFourImageAndTextStore.headline"
            id="standardFourImageAndTextTempalteInput"
            placeholder="Enter headline text" />
        </div>
      </form>
    </div>

    <h3 class="text-lg font-medium">Images</h3>
    <!-- <pre>headline: {{ headline }}</pre>
    <pre>{{ list }}</pre> -->
    <ul class="grid grid-cols-4 gap-3" id="standardFourImageAndTextList">
      <li
        v-for="(
          item, index
        ) in moduleTemplateStandardFourImageAndTextStore.list"
        :key="item.order">
        <div class="flex flex-col">
          <p class="text-lg">
            Image
            <span v-show="index === 0">*</span>
          </p>
          <div>
            <div
              v-if="!item.imgUrl"
              class="border-black border-2 border-dashed bg-orange-300 mb-3 flex justify-center items-center aspect-square cursor-pointer"
              role="button"
              @click="
                useModuleTemplateStandardFourImageAndTextStore.uploadImage
              ">
              <p>Click to add image</p>
            </div>
            <div v-else class="border-transparent border-2 mb-3 aspect-square">
              <img
                :src="item.imgUrl"
                class="w-full h-full object-cover"
                alt="" />
            </div>
          </div>
          <div class="mb-3">
            <label for="headInput1">
              <h3 class="text-lg font-medium">Headline</h3>
            </label>
            <input
              v-model="item.headline"
              type="text"
              placeholder="Type here"
              class="input" />
          </div>
          <div>
            <label for="bodyText1">
              <h3 class="text-lg font-medium">Body Text</h3>
            </label>
            <textarea
              v-model="item.bodyText"
              type="text"
              class="textarea"
              id="bodyText1"
              placeholder="Enter body text"></textarea>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { useModuleTemplateStandardFourImageAndTextStore } from '~/stores/blockModules/moduleTemplateStandardFourImageAndText.js';

const moduleTemplateStandardFourImageAndTextStore =
  useModuleTemplateStandardFourImageAndTextStore();
</script>
