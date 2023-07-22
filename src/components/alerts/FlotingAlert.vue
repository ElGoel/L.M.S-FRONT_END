<template>
  <v-slide-x-reverse-transition>
    <v-alert
      v-if="global.showAlert"
      :type="global.alert.type"
      dismissible
      :text="global.alert.message"
      class="custom-alert">
    </v-alert>
  </v-slide-x-reverse-transition>
</template>

<script setup lang="ts">
import { mapState, mapActions } from '@/utils/maps';
import { watch } from 'vue';

const { global } = mapState();
const { setAlert } = mapActions();

watch(
  () => global.value.showAlert,
  newValue => {
    if (newValue) {
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    }
  }
);
</script>

<style scoped>
.custom-alert {
  width: 450px;
  position: absolute;
  right: 0;
  top: 90px;
}
</style>
