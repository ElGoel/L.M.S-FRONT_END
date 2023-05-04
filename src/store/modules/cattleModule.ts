import { Module } from 'vuex';
import { getters } from './cattle-actions/getters';
import { mutations } from './cattle-actions/mutations';
import { actions } from './cattle-actions/actions';
import { ICattleData, ICattleState } from '@/interfaces/cattleState.interface';

const state: ICattleState = {
  cattleData: {
    totalPages: 0,
    currentPage: 0,
    cattle: [],
  },
};

export const cattleModule: Module<ICattleState, ICattleData> = {
  state,
  getters,
  mutations,
  actions,
};
