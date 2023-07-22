<script setup lang="ts">
import { computed, ref, watch, watchEffect } from 'vue';
import { useCattleStore } from '@/composables';
import { IBreed, ICattle } from '@/interfaces';
import { mapActions, mapState } from '@/utils/maps';
import { cloneDeep } from 'lodash';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { useBreedStore } from '@/composables/useBreedStore';
import FormField from '@/components/form/FormField.vue';
import DialogAlert from '@/components/alerts/DialogAlert.vue';
dayjs.extend(customParseFormat);

const {
  fillCattleForm,
  deleteCattle,
  setLoading,
  setDelete,
  setAlert,
  setStatusAlert,
} = mapActions();
const { global } = mapState();
const { cattleData } = useCattleStore();
const { breedData } = useBreedStore();

const dialog = ref(false);
const search = ref('');
const editedIndex = ref(-1);
const isDeleting = ref(false);
const itemFind = ref<number | undefined | null>(null);
// Methods

const cattleDataCombined = (): ICattle[] => {
  const breedNamesMap = breedData.value.item.reduce(
    (acc: Record<number, string | null>, breed: IBreed) => {
      acc[breed.id] = breed.name;
      return acc;
    },
    {}
  );

  const combinedData = cattleData.value.item.map((cattle: ICattle) => {
    if (typeof cattle.BreedId === 'number') {
      return {
        ...cattle,
        BreedId: cattle.BreedId !== null ? breedNamesMap[cattle.BreedId] : null,
        visible: true,
      };
    } else {
      return {
        ...cattle,
      };
    }
  });

  combinedData.sort((a, b) => {
    return dayjs(a.registerDate).isAfter(dayjs(b.registerDate)) ? -1 : 1;
  });

  return combinedData;
};

watchEffect(() => {
  const combinedData = cattleDataCombined();
  if (combinedData.length === 0) {
    setLoading(true);
  } else {
    setLoading(false);
  }
});

const filteredList = computed(() => {
  return cattleDataCombined().filter((cattle: ICattle) => {
    return cattle.number?.toString().includes(search.value) && !cattle.isDelete;
  });
});

const closeDialog = (): void => {
  dialog.value = false;
  editedIndex.value = -1;
};

const cattleListKeys = ref({
  id: 'ID',
  number: 'Numero',
  initWeight: 'Peso Inicial',
  quarterlyWeight: 'Peso Trimestral',
  ageGroup: 'Grupo Etareo',
  registerDate: 'Fecha de Registro',
  register: 'Registrador',
  BreedId: 'Raza',
  LotId: 'Lote',
});

const editItem = (item: ICattle) => {
  dialog.value = true;
  editedIndex.value = cattleData.value.item.indexOf(item) + 1;
  const cattleCopy = cloneDeep(item);
  fillCattleForm(cattleCopy);
};

const deleteAlert = () => {
  isDeleting.value = true;
  dialog.value = true;
};

const deleteItem = async (): Promise<void> => {
  setDelete(true);
  if (itemFind.value) {
    const result = await deleteCattle(itemFind.value);
    setStatusAlert({ message: result.data, type: 'warning' });
  }

  setDelete(false);
  setAlert(true);
  dialog.value = false;
};

// Computed Property
const formTitle = computed(() => {
  return editedIndex.value === -1 ? 'Nuevo Ganado' : 'Editar Ganado';
});

watch(
  () => dialog.value,
  newValue => {
    if (!newValue) {
      setTimeout(() => (isDeleting.value = false), 500);
    }
  }
);
</script>
<template>
  <v-container>
    <v-card>
      <v-card-text>
        <v-row>
          <v-col cols="12" lg="4" md="6">
            <v-text-field
              v-model="search"
              density="compact"
              label="Buscar"
              hide-details
              variant="outlined"
              color="primary"></v-text-field>
          </v-col>
          <v-col cols="12" lg="8" md="6" class="text-right">
            <v-dialog v-model="dialog" max-width="700">
              <template #activator="{ props }">
                <v-btn color="primary" v-bind="props" flat class="ml-auto">
                  <v-icon class="mr-2">mdi-account-multiple-plus</v-icon>Agregar
                  Ganado
                </v-btn>
              </template>
              <v-card>
                <FormField
                  v-if="!isDeleting"
                  :breed-data="breedData"
                  :cattle-data="cattleData"
                  :form-title="formTitle"
                  :dialog="dialog"
                  :close-dialog="closeDialog" />
                <DialogAlert
                  v-else
                  :close-dialog="closeDialog"
                  :delete-item="deleteItem" />
              </v-card>
            </v-dialog>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <v-card class="mt-2">
      <v-table class="mt-5">
        <v-progress-linear
          :active="global.isLoading"
          :indeterminate="global.isLoading"
          absolute
          bottom
          color="deep-purple-accent-4"></v-progress-linear>
        <thead>
          <tr>
            <th
              v-for="(value, index) in Object.values(cattleListKeys)"
              :key="index"
              class="text-subtitle-1 font-weight-semibold">
              {{ value }}
            </th>
            <th class="text-subtitle-1 font-weight-semibold">Actiones</th>
          </tr>
        </thead>
        <TransitionGroup name="list" class="text-body-1" tag="tbody">
          <tr v-for="(item, index) in filteredList" :key="item.id ?? index">
            <td class="font-weight-bold">{{ item.id }}</td>
            <td class="font-weight-bold">
              {{ item.number }}
            </td>
            <td class="font-weight-bold">
              {{ item.initWeight }}
            </td>
            <td class="font-weight-bold">
              {{ item.quarterlyWeight ?? 'N/A' }}
            </td>
            <td class="font-weight-bold">{{ item.ageGroup }}</td>
            <td class="font-weight-bold">
              {{
                item.registerDate !== undefined
                  ? dayjs(
                      item.registerDate?.substring(0, 10),
                      'YYYY-MM-DD'
                    ).format('DD/MM/YYYY')
                  : ''
              }}
            </td>
            <td class="font-weight-bold">{{ item.register }}</td>
            <td class="font-weight-bold">{{ item.BreedId }}</td>
            <td class="font-weight-bold">{{ item.LotId }}</td>
            <td>
              <div class="d-flex align-center">
                <v-tooltip text="Edit">
                  <template #activator="{ props }">
                    <v-btn
                      color="blue"
                      icon
                      variant="text"
                      v-bind="props"
                      @click="editItem(item)">
                      <v-icon>mdi-pencil-outline</v-icon>
                    </v-btn>
                  </template>
                </v-tooltip>
                <v-tooltip text="Delete">
                  <template #activator="{ props }">
                    <v-btn
                      icon
                      variant="text"
                      v-bind="props"
                      color="error"
                      @click="
                        () => {
                          itemFind = item.id;
                          deleteAlert();
                        }
                      ">
                      <v-icon>mdi-delete-outline</v-icon>
                    </v-btn>
                  </template>
                </v-tooltip>
              </div>
            </td>
            <!-- <TableData
                  v-show="item.visible"
                  :delete-alert="deleteAlert"
                  :item-find="itemFind"
                  :edit-item="editItem"
                  :item="item" /> -->
          </tr>
        </TransitionGroup>
      </v-table>
    </v-card>
  </v-container>
</template>

<style scoped>
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>
