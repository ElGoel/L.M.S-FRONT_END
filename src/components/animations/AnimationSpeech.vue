<script setup lang="ts">
import { Vue3Lottie } from 'vue3-lottie';
const props = defineProps({
  size: {
    type: Number,
    default: 500,
  },
});
</script>

<template>
  <Vue3Lottie
    animation-link="https://assets7.lottiefiles.com/packages/lf20_jZArKF.json"
    :height="props.size"
    :width="props.size" />
</template>

<style scoped lang="scss"></style>
