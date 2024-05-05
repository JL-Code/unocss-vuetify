<script setup>
const items = ref(15);
const loading = ref(true);

setTimeout(() => {
  loading.value = false;
  items.value = 5;
}, 800);
</script>
<template>
  <div class="py-8">
    <v-breadcrumbs :items="['Foo', 'Bar', 'Fizz']"></v-breadcrumbs>
    <div class="grid grid-cols-5 gap-4">
      <SkeletonItem :loading="loading" v-for="item in items" />
    </div>
  </div>
</template>
