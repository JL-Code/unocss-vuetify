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
    content-transition="vfm-slide-up"
    :reserve-scroll-bar-gap="false"
    class="flex justify-center items-center"
  >
    <v-card :title="title">
      <v-card-text
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
        ratione debitis quis est labore voluptatibus!</v-card-text
      >
      <v-card-actions>
        <v-btn @click="$emit('confirm')">Click me</v-btn>
      </v-card-actions>
    </v-card>
  </VueFinalModal>
</template>
