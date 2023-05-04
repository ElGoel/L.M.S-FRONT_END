<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue';
import { Store, useStore } from 'vuex';
import { onMounted } from 'vue';
import CattleList from './components/CattleList.vue';
import CattleForm from './components/CattleForm.vue';
import { ICattleState } from './interfaces/cattleState.interface';

const store: Store<ICattleState> = useStore();
onMounted(() => {
  store.dispatch('fetchCattle');
});
</script>

<template>
  <div class="container">
    <CattleForm />
    <CattleList />
  </div>
</template>
