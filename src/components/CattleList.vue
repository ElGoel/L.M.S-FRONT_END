<template>
  <div v-for="cattle in allCattle" :key="cattle.id">
    <h2>{{ cattle.register }}</h2>
  </div>
</template>
<script setup lang="ts">
import { ICattle } from '@/interfaces/cattleState.interface';
import store from '@/store';
import { ComputedRef, computed } from 'vue';

const allCattle: ComputedRef<ICattle[]> = computed(
  () => store.getters['getAllCattle']
);
</script>
