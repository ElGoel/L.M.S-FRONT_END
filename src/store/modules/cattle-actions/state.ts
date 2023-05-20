import { ICattleState } from '@/interfaces/cattleState.interface';

export const state: ICattleState = {
  cattleData: {
    totalPages: 0,
    currentPage: 0,
    cattle: [],
  },
  cattleForm: {
    number: null,
    race: null,
    initWeight: null,
    quarterlyWeight: null,
    register: '',
  },
};
