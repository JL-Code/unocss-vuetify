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
    :click-to-close="false"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
    class="flex justify-center items-center"
  >
    <v-card :title="title" subtitle="Subtitle">
      <slot />
      <v-card-actions>
        <v-btn>Click me</v-btn>
      </v-card-actions>
    </v-card>
  </VueFinalModal>
</template>
