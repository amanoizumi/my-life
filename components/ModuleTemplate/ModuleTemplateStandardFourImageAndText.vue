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
            v-model="headline"
            id="standardFourImageAndTextTempalteInput"
            placeholder="Enter headline text" />
        </div>
      </form>
    </div>

    <h3 class="text-lg font-medium">Images</h3>
    <!-- <pre>headline: {{ headline }}</pre>
    <pre>{{ list }}</pre> -->
    <ul class="grid grid-cols-4 gap-3" id="standardFourImageAndTextList">
      <li v-for="(item, index) in list" :key="item.order">
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
              @click="uploadImage">
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
const headline = ref('');
const list = ref([
  {
    order: 1,
    headline: 'Cat',
    bodyText: 'Cute Cat',
    imgUrl:
      'https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=2630&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    order: 2,
    headline: 'Bird',
    bodyText: 'Cute Bird',
    imgUrl:
      'https://plus.unsplash.com/premium_photo-1697263437649-3a008f45e46b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmVzdHxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    order: 3,
    headline: 'Cockatiel',
    bodyText: 'Ultra Cute Cockatiel',
    imgUrl:
      'https://images.unsplash.com/photo-1588156842490-8d7fdb1ce349?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    order: 4,
    headline: 'Crested Goshawk',
    bodyText: 'Cool Crested Goshawk',
    imgUrl:
      'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQVfvf-8C9WL0l2bL3_cr_XbjsCIsrkzZgUQIfs295s1h5Z3Hs2hUA8bqv4esGiSILBikJhm9JhqEYtTlvEMbYarA'
  }
]);

const uploadImage = () => {
  console.log('uploadImage');
};
</script>
