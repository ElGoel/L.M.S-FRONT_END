import { ActionTree } from 'vuex';
import axios from '@/api/axios.config';
import {
  ICattleState,
  ICattle,
  ICattleData,
} from '@/interfaces/cattleState.interface';
import { cloneDeep } from 'lodash';

export const actions: ActionTree<ICattleState, ICattleData> = {
  async fetchCattle({ commit }) {
    try {
      const response = await axios.get('/cattle');
      const data = response.data;
      commit('setCattle', data);
    } catch (error) {
      console.error(error);
    }
  },

  async createCattle({ commit, state }, cattle: ICattle) {
    try {
      const response = await axios.post('/cattle', cattle);
      if (response.data.status === 201) {
        const newCattleData = cloneDeep(state.cattleData);
        newCattleData.cattle.push(cattle);
        commit('setCattle', newCattleData);
      }
    } catch (error) {
      console.error(error);
    }
  },
};
