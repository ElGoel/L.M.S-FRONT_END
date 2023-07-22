import { ICattle, ICattleState } from '@/interfaces/cattleState.interface';
import { IState } from '@/interfaces';
import { GetterTree } from 'vuex';

export const getters: GetterTree<ICattleState, IState> = {
  // getCattleData: (state: ICattleState) => state.cattleData,
  getAllCattle: (state: ICattleState) => state.cattleData.item,
  getCattleById: state => (id: number) => {
    state.cattleData.item.find((cattle: ICattle) => cattle.id === id);
  },
};
