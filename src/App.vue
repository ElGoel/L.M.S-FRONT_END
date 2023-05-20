<script setup lang="ts">
import CattleList from './components/CattleList.vue';
import CattleForm from './components/CattleForm.vue';
import { useCattleStore } from './composables';

useCattleStore();
</script>

<template>
  <div class="container">
    <CattleForm />
    <CattleList />
  </div>
</template>
