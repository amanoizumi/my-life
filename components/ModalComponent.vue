<template>
  <div
    v-show="modalIsOpen"
    class="fixed inset-0 overflow-hidden bg-black/60 z-30 flex justify-center items-center"
    @click.self="close">
    <div
      class="bg-white text-black p-2.5 flex-1 overflow-y-auto max-h-screen"
      :class="[
        props.maxWidth ? `max-w-[${props.maxWidth}]` : '',
        props.rounded ? `rounded-[${props.rounded}]` : ''
      ]">
      <div class="relative px-8">
        <button
          class="absolute -top-3 -right-1 p-3"
          type="button"
          @click="close">
          <Icon name="mingcute:close-fill" />
        </button>
      </div>
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  textEditor: {
    type: Boolean,
    default: false
  },
  contentStyle: {
    type: String,
    default: ''
  },
  rounded: {
    type: String,
    default: ''
  },
  maxWidth: {
    type: String,
    default: ''
  }
});
const modalIsOpen = defineModel('modalIsOpen', {
  type: Boolean,
  default: false
});

const close = () => {
  modalIsOpen.value = false;
};
</script>
