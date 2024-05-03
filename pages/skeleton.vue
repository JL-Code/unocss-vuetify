<script setup>
const loading = ref(true);

setTimeout(() => {
  loading.value = false;
}, 800);
</script>
<template>
  <div class="py-8">
    <div class="grid grid-cols-5 gap-4">
      <SkeletonItem :loading="loading" v-for="item in 15" />
    </div>
  </div>
</template>
