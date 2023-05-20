import { createStore } from 'vuex';
import { cattleModule } from './modules/cattleModule';
import { IState } from '@/interfaces/cattleState.interface';

export default createStore<IState>({
  modules: {
    cattleM: cattleModule,
  },
});
