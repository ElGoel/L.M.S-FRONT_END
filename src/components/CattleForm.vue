<template>
  <v-sheet width="650" class="mx-auto mb-5">
    <v-form reset @submit.prevent="submitForm">
      <v-text-field
        v-model.trim="cattleForm.number"
        label="Numero de Etiqueta"></v-text-field>
      <v-text-field v-model.trim="cattleForm.race" label="Raza"></v-text-field>
      <v-text-field
        v-model.trim="cattleForm.initWeight"
        label="Peso Inicial"></v-text-field>
      <v-text-field
        v-model.trim="cattleForm.quarterlyWeight"
        label="Peso Trimestral"></v-text-field>
      <v-text-field
        v-model.trim="cattleForm.register"
        label="Registrador"></v-text-field>
      <v-btn color="green" type="submit" block class="mt-2">Submit</v-btn>
    </v-form>
  </v-sheet>
</template>
<script setup lang="ts">
import { useCattleStore } from '@/composables';
import { useForm } from 'vee-validate';
import { computed, watch } from 'vue';
import { useStore } from 'vuex';
// import * as Yup from 'yup';

/**
 * ? Initial Values of the 'Cattle' form
 */

const initialValues = {
  number: null,
  race: null,
  initWeight: null,
  quarterlyWeight: null,
  register: '',
};

const { cattleForm, cattleData } = useCattleStore();

const cattleId = computed(() => {
  return cattleData.value.cattle.find(
    cattle => cattle.id === cattleForm.value.id
  );
});

watch(
  cattleForm,
  newValue => {
    cattleForm.value = newValue;
  },
  { deep: true }
);

/**
 * ? Yup Validation Schema
 */
// const cattleSchema = Yup.object({
//   number: Yup.number().required('El numero es obligatorio'),
//   race: Yup.number().required('La Raza es obligatoria'),
//   initWeight: Yup.number().required('El peso inicial es obligatorio'),
//   quarterlyWeight: Yup.number().required('El peso trimestral es obligatorio'),
//   register: Yup.string().required('Register is required'),
// });

const { handleSubmit, resetForm } = useForm();

const store = useStore();

const submitForm = handleSubmit(async () => {
  if (
    cattleId.value !== undefined &&
    cattleId.value.id === cattleForm.value.id
  ) {
    await store.dispatch('cattleM/updatedCattle', cattleForm.value);
  } else {
    await store.dispatch('cattleM/createCattle', cattleForm.value);
  }
  resetForm();
  cattleForm.value = initialValues;
});
</script>
