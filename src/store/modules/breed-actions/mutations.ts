import { IBreed, IBreedData, IBreedState } from '@/interfaces';
import { MutationTree } from 'vuex';

export const mutations: MutationTree<IBreedState> = {
  setBreed(state: IBreedState, payload: IBreedData) {
    state.breedData = payload;
  },

  deleteBreedById(state: IBreedState, id: number) {
    state.breedData.item = state.breedData.item.filter(
      (breed: IBreed) => breed.id !== id
    );
  },

  setBreedForm(state: IBreedState, payload: IBreed) {
    state.breedForm = payload;
  },

  updateBreedById(state, updatedBreed: IBreed) {
    const breedIndex = state.breedData.item.findIndex(
      breed => breed.id === updatedBreed.id
    );
    state.breedData.item[breedIndex] = updatedBreed;
  },
};
