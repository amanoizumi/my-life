<template>
  <div>
    <label class="relative cursor-pointer">
      <slot></slot>
      <div
        v-if="uploading"
        class="absolute inset-0 flex justify-center items-center bg-white/70 font-bold text-lg">
        Uploading..
      </div>
      <input
        type="file"
        accept="image/*"
        @change="handleFileUpload"
        class="hidden" />
    </label>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL
} from 'firebase/storage';

const props = defineProps({
  imageIndex: {
    type: [String, Number],
    default: null
  }
});

const emit = defineEmits(['set-image']);

const { $storage } = useNuxtApp();
const uploading = ref(false);
const imageUrl = ref('');

const handleFileUpload = async (event) => {
  const target = event.target;
  if (!target.files || !target.files[0]) return;

  const file = target.files[0];
  uploading.value = true;

  try {
    const fileName = `${Date.now()}-${file.name}`;
    const imageRef = storageRef($storage, `images/playground/${fileName}`);

    const snapshot = await uploadBytes(imageRef, file);
    const url = await getDownloadURL(snapshot.ref);
    imageUrl.value = url;
    emit('set-image', url, props.imageIndex);
  } catch (error) {
    console.error('Failed to upload.', error);
  } finally {
    uploading.value = false;
  }
};
</script>

<style scoped>
.preview {
  max-width: 300px;
  margin-top: 1rem;
}

.preview img {
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
}
</style>
