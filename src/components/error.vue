<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps<{
  message: string;
  duration: number;
}>();

const isVisible = ref(true);

watch(() => props.message, () => {
  isVisible.value = true;
  setTimeout(() => {
    isVisible.value = false;
  }, props.duration);
});
</script>

<template>
  <div class="error-popup" :class="{ visible: isVisible }">
    <div class="error-popup-content">
      <p class="error-message">{{ message }}</p>
      <div class="error-popup-bar"></div>
    </div>
  </div>
</template>

<style scoped>
.error-popup {
  position: fixed;
  top: -100px; /* Start offscreen */
  left: 50%;
  transform: translateX(-50%);
  background-color: #f8d7da;
  color: #721c24;
  padding: 1em;
  border-radius: 0.5em;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  width: 300px;
  max-width: 90%;
  opacity: 0;
  transition: opacity 0.5s, top 0.5s;
}

.error-popup.visible {
  top: 1em; /* Slide in */
  opacity: 1;
}

.error-popup-content {
  position: relative;
}

.error-popup-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 5px;
  background-color: #721c24;
  animation: slideOut 2s linear forwards;
}

.error-message {
  margin: 0;
}

@keyframes slideOut {
  0% {
    width: 100%;
  }
  100% {
    width: 0;
  }
}
</style>