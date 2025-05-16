<template>
  <div>
    <div class="flex justify-between">
      <h2 class="text-xl font-semibold">Standard Four Image & Text</h2>
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
            class="input"
            v-model="store.headline"
            id="standardFourImageAndTextTempalteInput"
            placeholder="Enter headline text" />
        </div>
      </form>
    </div>

    <h3 class="text-lg font-medium">Images</h3>

    <ul class="grid grid-cols-4 gap-3" id="standardFourImageAndTextList">
      <li v-for="(item, index) in store.list" :key="item.order">
        <div class="flex flex-col">
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
          <div class="mb-3">
            <label for="headInput1">
              <h3 class="text-lg font-medium">Headline</h3>
            </label>
            <input
              v-model="store.list[index].headline"
              type="text"
              placeholder="Type here"
              class="input" />
          </div>
          <div>
            <label for="bodyText1">
              <h3 class="text-lg font-medium">Body Text</h3>
            </label>
            <textarea
              v-model="store.list[index].bodyText"
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

const store = useModuleTemplateStandardFourImageAndTextStore();
const moduleListStore = useModuleListStore();

const setImage = (imgUrl, imageIndex) => {
  store.list[imageIndex].imgUrl = imgUrl;
};

const closeEditor = () => {
  store.reset();
  moduleListStore.currentSelectedModuleId = '';
};
</script>
