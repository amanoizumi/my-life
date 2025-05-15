<template>
  <div>
    <div class="flex justify-between">
      <h2 class="text-xl font-semibold">Standard Four Image & Text</h2>
      <button type="button" class="btn btn-circle">X</button>
    </div>

    <hr class="mb-2" />
    <h3 class="text-lg font-medium">Headline</h3>
    <form>
      <div>
        <input
          type="text"
          class="input"
          v-model="headline"
          id="standardFourImageAndTextTempalteInput"
          placeholder="Enter headline text" />
      </div>
    </form>
    <h3 class="text-lg font-medium">Images</h3>
    <pre>headline: {{ headline }}</pre>
    <pre>{{ list }}</pre>
    <ul class="grid grid-cols-4 gap-3" id="standardFourImageAndTextList">
      <li v-for="item in list" :key="item.order">
        <div class="flex flex-col">
          <p class="text-lg">Image *</p>
          <div
            class="border border-black border-2 border-dashed bg-orange-300 mb-3 flex justify-center items-center aspect-square cursor-pointer"
            role="button"
            @click="uploadImage">
            <div>
              <div></div>
              <p>Click to add image</p>
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
            <input
              v-model="item.bodyText"
              type="text"
              class="input"
              id="bodyText1"
              placeholder="Enter body text" />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup>
const headline = ref('');
const list = ref([
  {
    order: 1,
    headline: '',
    bodyText: '',
    imgUrl: ''
  },
  {
    order: 2,
    headline: '',
    bodyText: '',
    imgUrl: ''
  },
  {
    order: 3,
    headline: '',
    bodyText: '',
    imgUrl: ''
  },
  {
    order: 4,
    headline: '',
    bodyText: '',
    imgUrl: ''
  }
]);

const uploadImage = () => {
  console.log('uploadImage');
};
</script>
