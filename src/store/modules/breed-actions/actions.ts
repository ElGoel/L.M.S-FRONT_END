import { ActionTree } from 'vuex';
import axios from '@/api/axios.config';
import { IBreed, IBreedState, IState } from '@/interfaces';
import { cloneDeep, omit } from 'lodash';

export const actions: ActionTree<IBreedState, IState> = {
  async fetchBreed({ commit }) {
    try {
      const response = await axios.get('/breed');
      const data = response.data;
      commit('setBreed', data);
    } catch (error) {
      console.error(error);
    }
  },

  async createBreed({ commit, state }, breed: IBreed) {
    try {
      const response = await axios.post('/breed', breed);
      if (response.data.status === 201) {
        const newBreedData = cloneDeep(state.breedData);
        newBreedData.item.push(response.data.item);
        commit('setBreed', newBreedData);
      }
      return response;
    } catch (error) {
      console.error(error);
    }
  },

  async deleteBreed({ commit }, id: number) {
    try {
      await axios.delete(`/breed/${id}`);
      commit('deleteBreedById', id);
    } catch (error) {
      console.log(error);
    }
  },

  async setForm({ commit }, val: unknown) {
    commit('setBreedForm', val);
  },

  async updatedBreed({ commit }, updatedBreed: IBreed) {
    try {
      const breedWithoutId = omit(updatedBreed, ['id', 'registerDate']);
      const response = await axios.put(
        `/breed/${updatedBreed.id}`,
        breedWithoutId
      );
      if (response.status === 200) {
        commit('updateBreedById', updatedBreed);
      }
      return response;
    } catch (error) {
      console.error(error);
    }
  },
};
