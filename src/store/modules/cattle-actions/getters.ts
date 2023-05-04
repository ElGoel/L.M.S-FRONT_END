import {
  ICattleState,
  ICattleData,
  ICattle,
  // ICattle,
} from '@/interfaces/cattleState.interface';
import { GetterTree } from 'vuex';

export const getters: GetterTree<ICattleState, ICattleData> = {
  // getCattleData: (state: ICattleState) => state.cattleData,
  getAllCattle: (state: ICattleState) => state.cattleData.cattle,
  getCattleById: state => (id: number) => {
    state.cattleData.cattle.find((cattle: ICattle) => cattle.id === id);
  },
};
