import { FieldContext } from 'vee-validate';
export interface ICattle {
  id?: number | null;
  number: number | null;
  initWeight: number | null;
  quarterlyWeight: number | null;
  ageGroup: string;
  registerDate?: string | null;
  register: string | null;
  isDelete?: boolean | undefined | null;
  BreedId: number | null | string;
  LotId: number | null;
  visible?: boolean;
}

export interface ICattleData {
  totalPages: number;
  currentPage: number;
  item: ICattle[];
}

export interface ICattleState {
  cattleData: ICattleData;
  cattleForm: ICattle;
}

export interface IFormFields {
  number: FieldContext<ICattle['number']>;
  BreedId: FieldContext<ICattle['BreedId']>;
  LotId: FieldContext<ICattle['LotId']>;
  ageGroup: FieldContext<ICattle['ageGroup']>;
  initWeight: FieldContext<ICattle['initWeight']>;
  quarterlyWeight: FieldContext<ICattle['quarterlyWeight']>;
  register: FieldContext<ICattle['register']>;
}
