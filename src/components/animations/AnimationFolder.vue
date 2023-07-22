<script setup lang="ts">
import { Vue3Lottie } from 'vue3-lottie';
const props = defineProps({
  size: {
    type: Number,
    default: 400,
  },
});
</script>

<template>
  <Vue3Lottie
    animation-link="https://assets10.lottiefiles.com/private_files/lf30_0cwwprun.json"
    :height="props.size"
    :width="props.size" />
</template>

<style scoped lang="scss"></style>
