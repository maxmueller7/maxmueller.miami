import React, { FC } from 'react';
import { Box, Paragraph } from 'theme-ui';
import { ThemeSwitcher } from './ThemeSwitcher';

export const Header: FC<{}> = (): JSX.Element => {
  return (
    <Box
      sx={{
        color: 'primary',
        display: 'flex',
        justifyContent: 'space-between',
        px: 2,
        py: 2,
      }}
    >
      <Paragraph
        sx={{
          display: 'flex',
          fontSize: 5,
          fontWeight: 'heading',
          justifyContent: 'flex-start',
          px: 3,
          py: 3,
        }}
      >
        Hello, I'm Max.
      </Paragraph>
      <ThemeSwitcher />
    </Box>
  );
};
