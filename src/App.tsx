import React from 'react';
import { Header } from 'components/Header/Header';
import { Max } from 'components/Body/Profile';
import { ThemeProvider, Box } from 'theme-ui';
import { theme } from './theme';
import { LanguageContext } from 'hooks/Contexts';
import { LanguageState } from 'hooks/languageReducer';

const App = (): JSX.Element => {
  return (
    <LanguageContext.Provider value={LanguageState}>
      <div className='App'>
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              bg: 'background',
              height: '100vh',
              textAlign: 'center',
            }}
          >
            <Header />
            <Max />
          </Box>
        </ThemeProvider>
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
