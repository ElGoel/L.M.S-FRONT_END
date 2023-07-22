import { IState } from '@/interfaces';
import { Color, IThemeState } from '@/interfaces/themeState.interface';
import { ActionTree } from 'vuex';

export const actions: ActionTree<IThemeState, IState> = {
  setMiniSideBar({ commit }, value: boolean) {
    commit('miniSideBar', value);
  },

  setPrimaryColor({ commit }, value: Color) {
    commit('primaryColor', value);
  },

  localCode({ commit }, value: string) {
    commit('miniSideBar', value);
  },
};
