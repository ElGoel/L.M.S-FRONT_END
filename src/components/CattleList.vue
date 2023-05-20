<template>
  <v-table v-if="cattleData.cattle && cattleData.cattle.length > 0">
    <thead>
      <tr>
        <th
          v-for="(key, index) in Object.keys(cattleData.cattle[0])"
          :key="index"
          class="text-left">
          {{ key }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="cattle in cattleData.cattle" :key="cattle.number">
        <td>{{ cattle.id }}</td>
        <td>{{ cattle.number }}</td>
        <td>{{ cattle.race }}</td>
        <td>{{ cattle.initWeight }}</td>
        <td>{{ cattle.quarterlyWeight }}</td>
        <td>
          {{
            cattle.registerDate !== undefined
              ? dayjs(
                  cattle.registerDate.substring(0, 10),
                  'YYYY-MM-DD'
                ).format('DD/MM/YYYY')
              : ''
          }}
        </td>
        <td>{{ cattle.register }}</td>
        <div>
          <v-btn color="red-darken-2" @click="deleteCattle(cattle.id)"
            >Eliminar</v-btn
          >
          <v-btn
            color="primary"
            @click="
              () => {
                updatedCattle(cattle);
                showModel();
              }
            "
            >Actualizar</v-btn
          >
        </div>
      </tr>
    </tbody>
  </v-table>
</template>
<script setup lang="ts">
import { mapActions } from '@/utils/maps';
import { cloneDeep } from 'lodash';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { useCattleStore } from '@/composables';
import { ICattle } from '@/interfaces/cattleState.interface';

defineProps({
  dialog: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:dialog']);

const showModel = () => {
  emit('update:dialog', true);
};

dayjs.extend(customParseFormat);

const { cattleData } = useCattleStore();
const updatedCattle = (cattle: ICattle) => {
  const cattleCopy = cloneDeep(cattle);
  setForm(cattleCopy);
};
const { deleteCattle, setForm } = mapActions();
</script>
