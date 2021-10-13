import React, { FC } from 'react';
import { Header } from 'pages/Header';
import { Main } from 'pages/Main';
import { ThemeProvider, Flex } from 'theme-ui';
import { theme } from './theme';
import './App.scss';

interface AppProps {}

const App: FC<AppProps> = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Flex
        sx={{
          flex: '1 1 auto',
          flexFlow: 'column',
        }}
      >
        <Header />
        <Main />
      </Flex>
    </ThemeProvider>
  );
};

export default App;
