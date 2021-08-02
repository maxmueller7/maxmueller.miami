export enum Languages {
  ENGLISH = 'English',
  SPANISH = 'Spanish',
}

export enum LanguageActionTypesEnum {
  SET_LANGUAGE = 'SET_LANGUAGE',
}

export interface ILanguageContextReducer {
  lang: string;
}

export interface changeLanguageAction {
  type: LanguageActionTypesEnum;
  payload: Languages;
}

export const setLanguage = (language: Languages): changeLanguageAction => ({
  type: LanguageActionTypesEnum.SET_LANGUAGE,
  payload: language,
});

export const LanguageContextState = {
  lang: Languages.ENGLISH,
};

export const languageContextReducer = (
  state: ILanguageContextReducer = LanguageContextState,
  action: changeLanguageAction
): ILanguageContextReducer => {
  switch (action.type) {
    case LanguageActionTypesEnum.SET_LANGUAGE:
      return { ...state, lang: action.payload };
    default:
      return { ...state, lang: Languages.ENGLISH };
  }
};
