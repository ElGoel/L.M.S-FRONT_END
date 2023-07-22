<template>
  <v-card>
    <v-card-title> pantalla de eliminación </v-card-title>
    <v-card-text>
      <p>Este elemento se va a eliminar</p>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions class="pa-4">
      <v-spacer></v-spacer>
      <v-btn @click="closeDialog()">Cancel</v-btn>
      <v-btn
        color="secondary"
        type="submit"
        :loading="global.isDelete"
        variant="flat"
        @click="deleteItem"
        >Aceptar</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { mapState } from '@/utils/maps';

defineProps<{
  deleteItem: () => void;
  closeDialog: () => void;
}>();

const { global } = mapState();
</script>

<style scoped></style>
