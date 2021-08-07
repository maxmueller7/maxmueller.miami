import React from 'react';
import { Header } from 'components/Header';
import { Max } from 'components/Max';
import { ThemeProvider, Box } from 'theme-ui';
import { theme } from './theme';

const App = (): JSX.Element => {
  return (
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
  );
};

export default App;
