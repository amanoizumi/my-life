<template>
  <section id="emptyModuleSection" class="container mx-auto px-4">
    <div
      class="border border-dotted container py-8 flex justify-center items-center w-full">
      <!-- Open the modal using ID.showModal() method -->
      <button class="btn" onclick="moduleListModal.showModal()">
        Add Module
      </button>
    </div>
    <dialog id="moduleListModal" class="modal">
      <div class="modal-box max-w-[640px]">
        <form method="dialog" class="mb-2">
          <h2 class="font-semibold text-2xl border-b border-gray-300 pb-3">
            Add Module
          </h2>
          <button
            class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>

        <div class="grid grid-cols-2 gap-4">
          <label
            class="hover:cursor-pointer"
            :for="block.id"
            v-for="block in moduleListStore.blocks"
            :key="block.id">
            <h3 class="font-semibold text-xl mb-2">{{ block.title }}</h3>

            <input
              :id="block.id"
              type="radio"
              :name="block.id"
              class="radio hidden" />

            <img :src="block.imageUrl" :alt="block.title" />
          </label>
        </div>
      </div>
    </dialog>
  </section>
</template>

<script setup>
const moduleListStore = useModuleListStore();
</script>
