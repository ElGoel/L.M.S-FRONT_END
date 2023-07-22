import { IBreed, IState } from '@/interfaces';
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

export const useBreedStore = () => {
  const store = useStore<IState>();

  const { breedM } = store.state;

  onMounted(() => {
    store.dispatch('breedM/fetchBreed');
  });
  return {
    breedData: computed(() => breedM.breedData),
    breedForm: computed({
      get() {
        return breedM.breedForm;
      },
      set(val: IBreed) {
        store.dispatch('breedM/setForm', val);
      },
    }),
  };
};
