import { createStore } from 'vuex';
import { cattleModule } from './modules/cattleModule';

export default createStore({
  modules: {
    cattleModule,
  },
});
