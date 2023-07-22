import {
  ICattle,
  ICattleData,
  ICattleState,
} from '@/interfaces/cattleState.interface';
import { MutationTree } from 'vuex';

export const mutations: MutationTree<ICattleState> = {
  SET_CATTLE_DATA(state: ICattleState, payload: ICattleData) {
    state.cattleData = payload;
  },

  DELETE_CATTLE_BY_ID(state: ICattleState, id: number) {
    state.cattleData.item = state.cattleData.item.filter(
      (cattle: ICattle) => cattle.id !== id
    );
  },

  SET_CATTLE_FORM(state: ICattleState, payload: ICattle) {
    state.cattleForm = payload;
  },

  UPDATE_CATTLE_BY_ID(state, updatedCattle: ICattle) {
    const cattleIndex = state.cattleData.item.findIndex(
      cattle => cattle.id === updatedCattle.id
    );
    state.cattleData.item[cattleIndex] = updatedCattle;
  },
};
