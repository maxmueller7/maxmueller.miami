import React, { createContext } from 'react';
import { LanguageState } from './languageReducer';

export const LanguageContext = createContext(LanguageState);
