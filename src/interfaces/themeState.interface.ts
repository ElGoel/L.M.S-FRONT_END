export interface Color {
  colorId: number;
  colorName: string;
  colorValue: string;
}

export interface IThemeState {
  miniSidebar: boolean;
  darkTheme: boolean;
  primaryColor: Color;
  mainSidebar: boolean;
  localCode: string;
}
