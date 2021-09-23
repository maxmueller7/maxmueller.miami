import React, { FC } from 'react';
import { Header } from 'components/Header';
import { Main } from 'pages/Main';
import { ThemeProvider, Flex } from 'theme-ui';
import { theme } from './theme';
import VexiGame from 'pages/VexiGame';

interface IAppProps {}

const App: FC<IAppProps> = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Flex
        sx={{
          flex: '1 1 auto',
          flexFlow: 'column',
        }}
      >
        <Header />
        <br />
        <main>
          <Main />
          <VexiGame />
        </main>
      </Flex>
    </ThemeProvider>
  );
};

export default App;
