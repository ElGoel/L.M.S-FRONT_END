export interface ICattle {
  id?: number;
  number: number | null;
  race: number | null;
  initWeight: number | null;
  quarterlyWeight: number | null;
  register: string;
  registerDate?: string;
}

export interface ICattleData {
  totalPages: number;
  currentPage: number;
  cattle: ICattle[];
}

export interface ICattleState {
  cattleData: ICattleData;
}
