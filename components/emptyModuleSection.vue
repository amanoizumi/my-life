<template>
  <div class="container mx-auto px-4">
    <div
      class="border border-dotted container py-8 flex justify-center items-center w-full">
      <button class="btn" @click="openModal">Add Module</button>
    </div>
    <dialog id="moduleListModal" class="modal" ref="modalRef">
      <div class="modal-box max-w-[640px]">
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
              <div class="p-3 mt-auto">
                <img
                  class="aspect-square object-cover"
                  :src="block.imageUrl"
                  :alt="block.title" />
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
const moduleListStore = useModuleListStore();
const modalRef = ref(null);
const moduleRadioValue = ref('');

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
</script>
