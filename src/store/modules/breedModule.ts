import { Module } from 'vuex';
import { mutations } from './breed-actions/mutations';
import { actions } from './breed-actions/actions';
import { state } from './breed-actions/state';
import { IBreedState, IState } from '@/interfaces';

export const breedModule: Module<IBreedState, IState> = {
  namespaced: true,
  state,
  mutations,
  actions,
};
