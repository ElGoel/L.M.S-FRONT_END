import { IBreedState } from '@/interfaces';

export const state: IBreedState = {
  breedData: {
    totalPages: 0,
    currentPage: 0,
    item: [],
  },
  breedForm: {
    origin: null,
    name: null,
    production: null,
  },
};
