export interface IBreed {
  id: number;
  code?: string | null;
  origin: string | null;
  name: string | null;
  production: string | null;
  isEditable?: boolean;
  isDelete?: boolean;
}

export interface IBreedData {
  totalPages: number;
  currentPage: number;
  item: IBreed[];
}

export interface IBreedState {
  breedData: IBreedData;
  breedForm: IBreed;
}
