import React from 'react';
import { Header } from 'components/Header';
import { WebPage } from 'pages/WebPage';
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
          <WebPage />
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default App;
