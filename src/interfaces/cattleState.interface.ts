export interface ICattle {
  id: number;
  number: number;
  race: number;
  initWeight: number;
  quarterlyWeight: number;
  register: string;
  registerDate: string;
}

export interface ICattleData {
  totalPages: number;
  currentPage: number;
  cattle: ICattle[];
}

export interface ICattleState {
  cattleData: ICattleData;
}
