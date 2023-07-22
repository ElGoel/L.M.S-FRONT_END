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
    animation-link="https://assets4.lottiefiles.com/packages/lf20_zrqthn6o.json"
    :height="props.size"
    :width="props.size" />
</template>

<style scoped lang="scss"></style>
