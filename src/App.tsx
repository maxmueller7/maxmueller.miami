import React, { FC } from 'react';
import { Header } from 'components/Header';
import { Profile } from 'pages/Profile';
import { ThemeProvider, Flex } from 'theme-ui';
import { theme } from './theme';
import VexiGame from 'pages/VexiGame';
import { FlagPole } from 'components/FlagPole';

interface IAppProps {}

const App: FC<IAppProps> = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Flex>
        <Flex
          sx={{
            flexFlow: 'column',
          }}
        >
          <Header />
          <br />
          <main>
            <Flex variant={'styles.main'}>
              <Profile />
              <VexiGame />
            </Flex>
          </main>
        </Flex>
        {/* <FlagPole /> */}
      </Flex>
    </ThemeProvider>
  );
};

export default App;
