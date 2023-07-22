import { ActionTree } from 'vuex';
import axios from '@/api/axios.config';
import { ICattle, ICattleState } from '@/interfaces/cattleState.interface';
import { IState } from '@/interfaces';
import { cloneDeep, omit } from 'lodash';

export const actions: ActionTree<ICattleState, IState> = {
  async fetchCattle({ commit }) {
    try {
      const response = await axios.get('/cattle');
      const data = response.data;
      commit('SET_CATTLE_DATA', data);
    } catch (error) {
      console.error(error);
    }
  },

  async createCattle({ commit, state }, cattle: ICattle) {
    try {
      const response = await axios.post('/cattle', cattle);
      if (response.data.status === 201) {
        const newCattleData = cloneDeep(state.cattleData);
        newCattleData.item.push(response.data.item);
        commit('SET_CATTLE_DATA', newCattleData);
      }
      return response;
    } catch (error) {
      console.error(error);
    }
  },

  async deleteCattle({ commit }, id: number) {
    try {
      const response = await axios.delete(`/cattle/${id}`);
      commit('DELETE_CATTLE_BY_ID', id);

      return response;
    } catch (error) {
      console.log(error);
    }
  },

  async fillCattleForm({ commit }, val: unknown) {
    commit('SET_CATTLE_FORM', val);
  },

  async updatedCattle({ commit }, updatedCattle: ICattle) {
    try {
      const cattleWithoutId = omit(updatedCattle, ['id', 'registerDate']);
      const response = await axios.put(
        `/cattle/${updatedCattle.id}`,
        cattleWithoutId
      );
      if (response.status === 200) {
        commit('UPDATE_CATTLE_BY_ID', updatedCattle);
      }
      return response;
    } catch (error) {
      console.error(error);
    }
  },
};
