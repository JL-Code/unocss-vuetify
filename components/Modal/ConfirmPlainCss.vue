<script setup lang="ts">
import { VueFinalModal } from "vue-final-modal";

defineProps<{
  title?: string;
}>();

const emit = defineEmits<{
  (e: "confirm"): void;
}>();
</script>

<template>
  <VueFinalModal
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
    class="flex justify-center items-center"
    content-class="flex flex-col max-w-xl mx-4 p-4 bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-lg space-y-2"
  >
    <h1>{{ title }}</h1>
    <slot />
    <button @click="emit('confirm')">Confirm</button>
  </VueFinalModal>
</template>
