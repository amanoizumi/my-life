<template>
  <div class="image-upload">
    <input
      type="file"
      accept="image/*"
      @change="handleFileUpload"
      class="file-input" />
    <div v-if="uploading" class="upload-status">上傳中...</div>
    <div v-if="imageUrl" class="preview">
      <img :src="imageUrl" alt="上傳的圖片" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL
} from 'firebase/storage';

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
  } catch (error) {
    console.error('上傳失敗:', error);
  } finally {
    uploading.value = false;
  }
};
</script>

<style scoped>
.image-upload {
  padding: 1rem;
}

.file-input {
  margin-bottom: 1rem;
}

.preview {
  max-width: 300px;
  margin-top: 1rem;
}

.preview img {
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
}

.upload-status {
  color: #666;
  margin: 0.5rem 0;
}
</style>
