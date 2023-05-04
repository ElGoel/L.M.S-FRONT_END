<template>
  <v-sheet width="650" class="mx-auto mb-5">
    <v-form validate-on="submit" reset @submit.prevent="submitForm">
      <v-text-field
        v-model.trim="number"
        :error-messages="numberError"
        label="Numero de Etiqueta"></v-text-field>
      <v-text-field
        v-model.trim="race"
        :error-messages="raceError"
        label="Raza"></v-text-field>
      <v-text-field
        v-model.trim="initWeight"
        :error-messages="initWeightError"
        label="Peso Inicial"></v-text-field>
      <v-text-field
        v-model.trim="quarterlyWeight"
        :error-messages="quarterlyWeightError"
        label="Peso Trimestral"></v-text-field>
      <v-text-field
        v-model.trim="register"
        :error-messages="registerError"
        label="Registrador"></v-text-field>
      <v-btn color="green" type="submit" block class="mt-2">Submit</v-btn>
    </v-form>
  </v-sheet>
</template>
<script setup lang="ts">
import { ICattle } from '@/interfaces/cattleState.interface';
import { useField, useForm } from 'vee-validate';
import { reactive } from 'vue';
import { useStore } from 'vuex';
import * as Yup from 'yup';

/**
 * ? Initial Values of the 'Cattle' form
 */
const initialValues = reactive({
  number: null,
  race: null,
  initWeight: null,
  quarterlyWeight: null,
  register: '',
});

/**
 * ? Yup Validation Schema
 */
const cattleSchema = Yup.object().shape({
  number: Yup.number().required('El numero es obligatorio'),
  race: Yup.number().required('La Raza es obligatoria'),
  initWeight: Yup.number().required('El peso inicial es obligatorio'),
  quarterlyWeight: Yup.number().required('El peso trimestral es obligatorio'),
  register: Yup.string().required('Register is required'),
});

const { handleSubmit } = useForm({
  validationSchema: cattleSchema,
  initialValues,
});

const store = useStore();

const submitForm = handleSubmit(async (newCattle: ICattle, { resetForm }) => {
  await store.dispatch('createCattle', newCattle);
  resetForm();
});

const { value: number, errorMessage: numberError } = useField('number');
const { value: race, errorMessage: raceError } = useField('race');
const { value: initWeight, errorMessage: initWeightError } =
  useField('initWeight');
const { value: quarterlyWeight, errorMessage: quarterlyWeightError } =
  useField('quarterlyWeight');
const { value: register, errorMessage: registerError } = useField('register');
</script>
