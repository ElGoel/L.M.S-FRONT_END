import { Module } from 'vuex';
import { mutations } from './theme-actions/mutations';
import { actions } from './theme-actions/actions';
import { state } from './theme-actions/state';
import { IState } from '@/interfaces';
import { IThemeState } from '@/interfaces/themeState.interface';

export const themeModule: Module<IThemeState, IState> = {
  namespaced: true,
  state,
  mutations,
  actions,
};
