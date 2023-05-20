<template>
  <div class="text-center">
    <v-btn color="primary">
      Open Dialog

      <v-dialog v-model="dialogModel" activator="parent" width="auto">
        <v-sheet width="650" class="mx-auto mb-5">
          <v-form validate-on="submit" reset @submit.prevent="submitForm">
            <v-text-field
              v-model.trim="cattleForm.number"
              label="Numero de Etiqueta"></v-text-field>
            <v-text-field
              v-model.trim="cattleForm.race"
              label="Raza"></v-text-field>
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
          <v-btn color="primary" block @click="closeDialog">Close Dialog</v-btn>
        </v-sheet>
      </v-dialog>
    </v-btn>
  </div>
</template>
<script setup lang="ts">
import { useCattleStore } from '@/composables';
import { useForm } from 'vee-validate';
import { computed, watch } from 'vue';
import { useStore } from 'vuex';
// import * as Yup from 'yup';

const props = defineProps({
  dialog: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:dialog']);

const dialogModel = computed({
  get() {
    return props.dialog;
  },
  set(value) {
    emit('update:dialog', value);
  },
});

const closeDialog = () => {
  emit('update:dialog', false);
};
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
  closeDialog();
  cattleForm.value = initialValues;
});
</script>
