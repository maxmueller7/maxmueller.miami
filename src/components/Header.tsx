import React, { FC } from 'react';
import { Box, Paragraph } from 'theme-ui';
import { ThemeSwitcher } from './ThemeSwitcher';

export const Header: FC<{}> = (): JSX.Element => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        px: 2,
        py: 2,
        color: 'primary',
        fontSize: 5,
        fontWeight: 'heading',
      }}
    >
      <Paragraph
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          px: 3,
          py: 3,
          color: 'primary',
          fontSize: 5,
          fontWeight: 'heading',
        }}
      >
        Hello, I'm Max.
      </Paragraph>
      <ThemeSwitcher />
    </Box>
  );
};
