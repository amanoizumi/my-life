<template>
  <div class="container mx-auto px-4">
    <div
      class="border border-dotted container py-8 flex justify-center items-center w-full">
      <button class="btn" @click="openModal">Add Module</button>
    </div>
    <dialog id="moduleListModal" class="modal" ref="modalRef">
      <div class="modal-box max-w-[1440px]">
        <div class="mb-2">
          <h2 class="font-semibold text-2xl border-b border-gray-300 pb-3">
            Add Module
          </h2>
          <button
            class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            @click="closeModal">
            ✕
          </button>
        </div>
        <label class="input w-full mb-3">
          <svg
            class="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <g
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2.5"
              fill="none"
              stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input v-model="searchInputValue" required placeholder="Search" />
        </label>

        <div class="grid grid-cols-2 gap-4">
          <div
            v-for="block in moduleListStore.blocks"
            :key="block.id"
            class="rounded-lg overflow-hidden border-2 duration-100"
            :class="[
              block.id === moduleRadioValue
                ? 'border-indigo-500'
                : 'border-transparent'
            ]">
            <label
              class="hover:cursor-pointer flex flex-col h-full"
              :for="block.id">
              <h3 class="font-semibold text-xl p-3 pb-0 leading-[1.1]">
                {{ block.title }}
              </h3>

              <input
                :id="block.id"
                type="radio"
                name="moduleRadio"
                :value="block.id"
                v-model="moduleRadioValue"
                class="radio hidden" />
              <div class="p-3">
                <img class="" :src="block.imageUrl" :alt="block.title" />
              </div>
            </label>
          </div>
        </div>

        <div class="modal-action">
          <button
            class="btn btn-primary"
            :disabled="!moduleRadioValue"
            @click="submit">
            Submit
          </button>
          <form method="dialog">
            <button class="btn btn-outline">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  </div>
</template>

<script setup>
import { debounce } from 'lodash-es';
const moduleListStore = useModuleListStore();
const modalRef = ref(null);
const moduleRadioValue = ref('');
const searchInputValue = ref('');

const openModal = () => {
  modalRef.value.showModal();
};

const closeModal = () => {
  modalRef.value.close();
};

const submit = () => {
  moduleListStore.currentSelectedModuleId = moduleRadioValue.value;
  closeModal();
};

const doSearch = debounce((val) => {
  console.log('觸發搜尋：', val);
}, 500);

watch(searchInputValue, (newVal) => {
  doSearch(newVal);
});
</script>
