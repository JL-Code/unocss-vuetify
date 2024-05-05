<script setup>
import { useModal } from "vue-final-modal";
import { ModalConfirmPlainCss } from "#components";

const { open, close } = useModal({
  component: ModalConfirmPlainCss,
  attrs: {
    title: "Hello World!",
    onConfirm() {
      close();
    },
  },
  slots: {
    default: "<p>The content of the modal</p>",
  },
});
</script>

<template>
  <div>
    <p>index</p>
    <v-btn>按钮</v-btn>

    <p>unocss tailwindcss preset</p>
    <p class="text-red">文字颜色1</p>
    <p class="text-gray-300">文字颜色2</p>
    <p class="bg-red">背景颜色</p>

    <p>链接</p>
    <NuxtLink to="/skeleton">Skeleton Demo</NuxtLink>

    <p>vue final modal</p>
    <v-btn @click="open">open Modal</v-btn>

    
    <p>vue final modal</p>
    <v-btn @click="open">open Modal</v-btn>
  </div>
</template>
