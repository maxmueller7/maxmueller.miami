import { Language } from 'utils/utils';

export enum languageActionTypes {
  SET_LANGUAGE,
}

export interface ILanguageAction {
  type: languageActionTypes;
  payload: Language;
}

export interface ILanguageState {
  language: Language;
}

export const LanguageState = {
  language: Language.US,
};

// export const setLanguage = (language: Language): void => {
//   type: languageActionTypes.SET_LANGUAGE, language;
// };

export const languageReducer = (
  state: ILanguageState = LanguageState,
  action: ILanguageAction
): ILanguageState => {
  switch (action.type) {
    case languageActionTypes.SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
  }
};
