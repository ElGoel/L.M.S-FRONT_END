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
        newCattleData.cattle.push(response.data.item);
        commit('setCattle', newCattleData);
      }
      return response;
    } catch (error) {
      console.error(error);
    }
  },

  async deleteCattle({ commit }, id: number) {
    try {
      await axios.delete(`/cattle/${id}`);
      commit('deleteCattleById', id);
    } catch (error) {
      console.log(error);
    }
  },

  async updatedCattle({ commit }, updatedCattle: ICattle) {
    try {
      const response = await axios.put(
        `/cattle/${updatedCattle.id}`,
        updatedCattle
      );
      if (response.status === 200) {
        commit('updateCattleById', updatedCattle);
      }
    } catch (error) {
      console.error(error);
    }
  },
};
