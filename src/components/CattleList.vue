<template>
  <v-table v-if="getAllCattle && getAllCattle.length > 0">
    <thead>
      <tr>
        <th
          v-for="(key, index) in Object.keys(getAllCattle[0])"
          :key="index"
          class="text-left">
          {{ key }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="cattle in getAllCattle" :key="cattle.number">
        <td>{{ cattle.id }}</td>
        <td>{{ cattle.number }}</td>
        <td>{{ cattle.race }}</td>
        <td>{{ cattle.initWeight }}</td>
        <td>{{ cattle.quarterlyWeight }}</td>
        <td>
          {{
            dayjs(cattle.registerDate.substring(0, 10), 'YYYY-MM-DD').format(
              'DD/MM/YYYY'
            )
          }}
        </td>
        <td>{{ cattle.register }}</td>
        <div>
          <v-btn color="red-darken-2" @click="deleteCattle(cattle.id)"
            >Eliminar</v-btn
          >
          <v-btn color="primary" @click="$emit('update-cattle', cattle)"
            >Actualizar</v-btn
          >
        </div>
      </tr>
    </tbody>
  </v-table>
</template>
<script setup lang="ts">
import { mapGetters, mapActions } from '@/utils/maps';
import { defineEmits } from 'vue';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

const { deleteCattle } = mapActions();
const { getAllCattle } = mapGetters();

defineEmits(['update-cattle']);
</script>
