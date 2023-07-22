import { ICattle } from '@/interfaces/cattleState.interface';
import { IState } from '@/interfaces';
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

export const useCattleStore = () => {
  const store = useStore<IState>();

  const { cattleM } = store.state;

  onMounted(() => {
    store.dispatch('cattleM/fetchCattle');
  });
  return {
    cattleData: computed(() => cattleM.cattleData),
    cattleForm: computed({
      get() {
        return cattleM.cattleForm;
      },
      set(val: ICattle) {
        store.dispatch('cattleM/fillCattleForm', val);
      },
    }),
  };
};
