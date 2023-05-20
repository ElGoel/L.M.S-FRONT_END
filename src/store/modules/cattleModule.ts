import { Module } from 'vuex';
import { getters } from './cattle-actions/getters';
import { mutations } from './cattle-actions/mutations';
import { actions } from './cattle-actions/actions';
import { state } from './cattle-actions/state';
import { ICattleState, IState } from '@/interfaces/cattleState.interface';

export const cattleModule: Module<ICattleState, IState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
