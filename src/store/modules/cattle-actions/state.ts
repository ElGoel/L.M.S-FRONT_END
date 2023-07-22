import { ICattleState } from '@/interfaces/cattleState.interface';

export const state: ICattleState = {
  cattleData: {
    totalPages: 0,
    currentPage: 0,
    item: [],
  },
  cattleForm: {
    number: null,
    BreedId: null,
    initWeight: null,
    quarterlyWeight: null,
    register: '',
    ageGroup: '',
    LotId: null,
  },
};
