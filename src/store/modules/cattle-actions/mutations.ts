import {
  ICattle,
  ICattleData,
  ICattleState,
} from '@/interfaces/cattleState.interface';
import { MutationTree } from 'vuex';

export const mutations: MutationTree<ICattleState> = {
  setCattle(state: ICattleState, payload: ICattleData) {
    state.cattleData = payload;
  },

  deleteCattleById(state: ICattleState, id: number) {
    state.cattleData.cattle = state.cattleData.cattle.filter(
      (cattle: ICattle) => cattle.id !== id
    );
  },

  setCattleForm(state: ICattleState, payload: ICattle) {
    state.cattleForm = payload;
  },

  updateCattleById(state, updatedCattle: ICattle) {
    const cattleIndex = state.cattleData.cattle.findIndex(
      cattle => cattle.id === updatedCattle.id
    );
    state.cattleData.cattle[cattleIndex] = updatedCattle;
  },
};
