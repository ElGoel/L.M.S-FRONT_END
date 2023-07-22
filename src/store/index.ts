import { createStore } from 'vuex';
import { cattleModule } from './modules/cattleModule';
import { IState } from '@/interfaces';
import VuexPersistence from 'vuex-persist';
import { themeModule } from './modules/costumizeTheme';
import { breedModule } from './modules/breedModule';
import { IThemeState } from '@/interfaces/themeState.interface';
import { globalModule } from './modules/globalModule';

const vuexPersist = new VuexPersistence<IState>({
  key: 'customizeTheme',
  storage: localStorage,
  reducer: (state: IState): Partial<IThemeState> => ({
    darkTheme: state.customizeTheme.darkTheme,
    primaryColor: state.customizeTheme.primaryColor,
    localCode: state.customizeTheme.localCode,
    mainSidebar: state.customizeTheme.mainSidebar,
  }),
});

export default createStore<IState>({
  modules: {
    cattleM: cattleModule,
    customizeTheme: themeModule,
    breedM: breedModule,
    global: globalModule,
  },
  plugins: [vuexPersist.plugin],
});
