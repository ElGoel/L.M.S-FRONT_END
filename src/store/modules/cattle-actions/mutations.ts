import {
  // ICattle,
  ICattleData,
  ICattleState,
} from '@/interfaces/cattleState.interface';
// import { cloneDeep } from 'lodash';
import { MutationTree } from 'vuex';

export const mutations: MutationTree<ICattleState> = {
  setCattle(state: ICattleState, payload: ICattleData) {
    state.cattleData = payload;
  },
};
