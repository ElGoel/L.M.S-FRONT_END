<template>
  <v-card-title class="pa-4 bg-secondary">
    <span class="title text-white">{{ formTitle }}</span>
  </v-card-title>

  <v-card-text>
    <v-form
      ref="form"
      lazy-validation
      class="mt-5"
      @submit.prevent="submitForm">
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model.trim="cattleForm.number"
            label="Numero"
            color="primary"
            type="number"
            density="compact"
            variant="outlined"
            :error-messages="
              getFieldErrorMessage('number').value
            "></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-autocomplete
            v-model.trim="cattleForm.BreedId"
            color="primary"
            density="compact"
            :items="breedData.item.map(breed => breed.name)"
            variant="outlined"
            label="Raza"
            :error-messages="
              getFieldErrorMessage('BreedId').value
            "></v-autocomplete>
        </v-col>
        <v-col cols="12" sm="6">
          <v-select
            v-model.trim="cattleForm.ageGroup"
            label="Grupo Etareo"
            variant="outlined"
            :items="['Becerro', 'Novillo/a', 'Maute', 'Toro', 'Vaca']"
            color="primary"
            density="compact"
            :error-messages="getFieldErrorMessage('ageGroup').value"></v-select>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model.trim="cattleForm.initWeight"
            label="Peso Inicial"
            variant="outlined"
            color="primary"
            density="compact"
            type="number"
            :error-messages="
              getFieldErrorMessage('initWeight').value
            "></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model.trim="cattleForm.quarterlyWeight"
            label="Peso Trimestral"
            variant="outlined"
            type="number"
            color="primary"
            density="compact"
            :error-messages="
              getFieldErrorMessage('quarterlyWeight').value
            "></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model.trim="cattleForm.register"
            label="Registrador"
            variant="outlined"
            color="primary"
            density="compact"
            :error-messages="
              getFieldErrorMessage('register').value
            "></v-text-field>
        </v-col>
        <v-col cols="12" sm="12">
          <v-text-field
            v-model="cattleForm.LotId"
            variant="outlined"
            color="primary"
            type="number"
            density="compact"
            :error-messages="getFieldErrorMessage('LotId').value"
            label="Lote"></v-text-field>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-card-actions class="pa-4">
        <v-spacer></v-spacer>
        <v-btn
          color="error"
          @click="
            () => {
              resetCattleForm(), props.closeDialog();
            }
          "
          >Cancel</v-btn
        >
        <v-btn
          color="secondary"
          type="submit"
          variant="flat"
          :loading="isSubmitting"
          :disabled="isSubmitting"
          >Submit</v-btn
        >
      </v-card-actions>
    </v-form>
  </v-card-text>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue';
import { useField, useForm } from 'vee-validate';
import { useCattleStore } from '@/composables/useCattleStore';
import { mapActions } from '@/utils/maps';
import cattleSchema from '@/validation/schemas/cattle.schema';
import { ICattleData, IFormFields } from '@/interfaces/cattleState.interface';
import { IBreedData } from '@/interfaces';
import { pick } from 'lodash';

/**
 * ? Props
 * @prop {cattleSchema, closeDialog, response}
 */
const props = defineProps<{
  closeDialog: () => void;
  dialog: boolean;
  cattleData: ICattleData;
  breedData: IBreedData;
  formTitle: string;
}>();

const { createCattle, updatedCattle, setAlert, setStatusAlert } = mapActions();

/**
 * ? Initial Values of the 'Cattle' form
 */
const { cattleForm } = useCattleStore();

// Find cattle id from the state CattleData
const cattleId = computed(() => {
  return props.cattleData.item.find(
    cattle => cattle.id === cattleForm.value.id
  );
});

/**
 * ? Config Form and Field
 */
const { handleSubmit, resetForm, setValues, isSubmitting } = useForm({
  initialValues: cattleForm.value,
  validationSchema: cattleSchema,
});

const formFields: IFormFields = {
  number: useField('number'),
  BreedId: useField('BreedId'),
  LotId: useField('LotId'),
  ageGroup: useField('ageGroup'),
  initWeight: useField('initWeight'),
  quarterlyWeight: useField('quarterlyWeight'),
  register: useField('register'),
};

/**
 * * Getting Errors from the field
 * @param fieldName the name of the field
 */
const getFieldErrorMessage = (fieldName: keyof typeof formFields) => {
  return formFields[fieldName].errorMessage;
};

const resetCattleForm = () => {
  cattleForm.value = {
    number: null,
    ageGroup: '',
    BreedId: null,
    initWeight: null,
    quarterlyWeight: null,
    register: '',
    LotId: null,
  };
};

/**
 * ? SubmitForm
 */
const submitForm = handleSubmit(async values => {
  try {
    const selectedBreed = props.breedData.item.find(
      breed => breed.name === values.BreedId
    );

    if (selectedBreed !== undefined) {
      values.BreedId = selectedBreed.id;
    } else {
      console.warn(`Raza "${values.BreedId}" no encontrada.`);
    }

    const copyValues = pick(values, [
      'id',
      'number',
      'initWeight',
      'quarterlyWeight',
      'ageGroup',
      'registerDate',
      'register',
      'BreedId',
      'LotId',
    ]);

    if (cattleId.value !== undefined && cattleId.value.id === values.id) {
      const result = await updatedCattle(copyValues);
      setStatusAlert({ message: result.data, type: 'success' });
    } else {
      const result = await createCattle(values);
      setStatusAlert({ message: result.data.message, type: 'success' });
    }
    resetForm();
    setAlert(true);
    props.closeDialog();
  } catch (error) {
    console.error(error);
  }
});

/**
 * ? Watch for changes in the cattleForm State and update the value of the cattleForm State
 * ? Setting the values for the form fields
 */
watch(
  cattleForm,
  newValue => {
    cattleForm.value = newValue;
    setValues(cattleForm.value);
  },
  { deep: true }
);

watch(
  () => props.dialog,
  newValue => {
    if (!newValue) {
      resetCattleForm();
    }
  }
);
</script>
