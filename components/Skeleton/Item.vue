<script setup>
const title = "EU · Atreia - Asmodian";
const subtitle = "";
const src = ref("https://img.gameusd.com/gameusd/icon/gold-light-min.webp");
</script>
<template>
  <v-skeleton-loader
    v-bind="$attrs"
    class="border"
    max-width="300"
    type="image, article"
  >
    <v-responsive>
      <v-img :src="src" class="mb-2 bg-gradient-from-blue" height="184" cover></v-img>

      <v-list-item
        :subtitle="subtitle"
        :title="title"
        class="px-0 text-center"
      ></v-list-item>
    </v-responsive>
  </v-skeleton-loader>
</template>
