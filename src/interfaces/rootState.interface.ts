import { IBreedState } from './breedState.interface';
import { ICattleState } from './cattleState.interface';
import { IThemeState } from './themeState.interface';

export interface IAlert {
  type: string;
  message: string;
}

export interface IGlobalState {
  isLoading: boolean;
  showAlert: boolean;
  isDelete: boolean;
  alert: IAlert;
}

export interface IState {
  global: IGlobalState;
  cattleM: ICattleState;
  customizeTheme: IThemeState;
  breedM: IBreedState;
}
