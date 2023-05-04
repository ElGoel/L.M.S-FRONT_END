<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue';
import { useStore } from 'vuex';
import { onMounted, reactive } from 'vue';
import CattleList from './components/CattleList.vue';

const formData = reactive({
  number: 0,
  race: 0,
  initWeight: 0,
  quarterlyWeight: 0,
  register: '',
});

const store = useStore();

const submitForm = async () => {
  const newCattle = {
    number: formData.number,
    race: formData.race,
    initWeight: formData.initWeight,
    quarterlyWeight: formData.quarterlyWeight,
    register: formData.register,
  };

  await store.dispatch('createCattle', newCattle);

  formData.number = 0;
  formData.race = 0;
  formData.initWeight = 0;
  formData.quarterlyWeight = 0;
  formData.register = '';
};

onMounted(() => {
  store.dispatch('fetchCattle');
});
</script>

<template>
  <div>
    <form @submit.prevent="submitForm">
      <input v-model="formData.number" type="number" placeholder="Number" />
      <input v-model="formData.race" type="number" placeholder="Race" />
      <input
        v-model="formData.initWeight"
        type="number"
        placeholder="Init Weight"
        min="0"
        step=".01" />
      <input
        v-model="formData.quarterlyWeight"
        type="number"
        placeholder="Quarterly Weight"
        step=".01" />
      <input v-model="formData.register" type="text" placeholder="Register" />
      <button type="submit">Add Cattle</button>
    </form>
    <CattleList />
  </div>
</template>
