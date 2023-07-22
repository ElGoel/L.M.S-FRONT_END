<template>
  <h1 v-if="title" class="text-h5 mt-5">{{ title }}</h1>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const title = ref('');

watchEffect(() => {
  if (route.meta && route.meta.title) {
    title.value = route.meta.title as string;
  } else {
    title.value = '';
  }
});
</script>
