<script setup lang="ts">
import CattleList from './components/CattleList.vue';
import CattleForm from './components/CattleForm.vue';
import { useCattleStore } from './composables';
import { ref } from 'vue';

useCattleStore();
const dialog = ref(false);
</script>

<template>
  <div class="container">
    <CattleForm v-model:dialog="dialog" />
    <CattleList v-model:dialog="dialog" />
  </div>
</template>
