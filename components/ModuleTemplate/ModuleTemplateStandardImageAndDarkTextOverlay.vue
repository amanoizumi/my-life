<template>
  <div>
    <div class="flex justify-between">
      <h2 class="text-xl font-semibold">Standard Image & Dark Text Overlay</h2>
      <button
        type="button"
        class="btn btn-circle leading-none w-7 h-7 m-1"
        @click="closeEditor">
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
            class="input w-full"
            v-model="store.headline"
            placeholder="Enter headline text" />
        </div>
      </form>
    </div>

    <h3 class="text-lg font-medium">Images</h3>

    <div v-for="(item, index) in store.list" :key="item.order">
      <div class="flex flex-col max-w-120 mx-auto">
        <p class="text-lg">
          Image
          <span v-show="index === 0">*</span>
        </p>
        <div class="mb-3">
          <ImageUpload :image-index="index" @set-image="setImage">
            <div
              v-if="!store.list[index].imgUrl"
              class="border-black border-2 border-dashed bg-orange-300 flex justify-center items-center aspect-square cursor-pointer text-center"
              role="button"
              @click="store.list[index].uploadImage">
              <p>Click to add image</p>
            </div>
            <div v-else class="border-transparent border-2 aspect-square">
              <img
                :src="store.list[index].imgUrl"
                class="w-full h-full object-cover"
                alt="" />
            </div>
          </ImageUpload>
        </div>
        <div class="flex flex-col gap-y-3">
          <div>
            <label for="headline1">
              <h3 class="text-lg font-medium">Headline</h3>
            </label>
            <input
              id="headline1"
              v-model="store.list[index].headline"
              type="text"
              placeholder="Type here"
              class="input w-full" />
          </div>
          <div>
            <label for="bodyText">
              <h3 class="text-lg font-medium">Body Text</h3>
            </label>
            <textarea
              v-model="store.list[index].bodyText"
              type="text"
              class="textarea w-full"
              id="bodyText"
              placeholder="Enter body text"></textarea>
          </div>
          <div>
            <label for="buttonText">
              <h3 class="text-lg font-medium">Button Text</h3>
            </label>
            <input
              v-model="store.list[index].buttonText"
              id="buttonText"
              type="text"
              placeholder="Type here"
              class="input w-full" />
          </div>
          <div>
            <label for="buttonUrl">
              <h3 class="text-lg font-medium">Button Url</h3>
            </label>
            <input
              v-model="store.list[index].buttonUrl"
              id="buttonUrl"
              type="text"
              placeholder="Type here"
              class="input w-full" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useModuleTemplateStandardImageAndDarkTextOverlay } from '~/stores/blockModules/moduleTemplateStandardImageAndDarkTextOverlay.js';

const store = useModuleTemplateStandardImageAndDarkTextOverlay();
const moduleListStore = useModuleListStore();

const setImage = (imgUrl, imageIndex) => {
  store.list[imageIndex].imgUrl = imgUrl;
};

const closeEditor = () => {
  store.reset();
  moduleListStore.currentSelectedModuleId = '';
};
</script>
