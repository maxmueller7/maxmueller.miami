import React, { FC } from 'react';
import { Header } from 'components/Header';
import { Main } from 'pages/Main';
import { ThemeProvider, Flex } from 'theme-ui';
import { theme } from './theme';

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
        <Main />
      </Flex>
    </ThemeProvider>
  );
};

export default App;
