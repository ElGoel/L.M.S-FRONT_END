import { Color, IThemeState } from '@/interfaces/themeState.interface';
import { MutationTree } from 'vuex';

export const mutations: MutationTree<IThemeState> = {
  miniSideBar(state, payload: boolean) {
    state.miniSidebar = payload;
  },
  primaryColor(state, payload: Color) {
    state.primaryColor = payload;
  },
  localCode(state, localCode: string) {
    state.localCode = localCode;
  },
};
