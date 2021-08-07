import React, { FC } from 'react';
import { Box, Paragraph } from 'theme-ui';
import { ThemeSwitcher } from './ThemeSwitcher';

export const Header: FC<{}> = (): JSX.Element => {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          px: 2,
          py: 2,
        }}
      >
        <ThemeSwitcher />
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          px: 2,
          py: 2,
        }}
      >
        <Paragraph
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            px: 2,
            py: 2,
            color: 'primary',
            fontSize: 5,
            fontWeight: 'heading',
          }}
        >
          Hello.
        </Paragraph>
      </Box>
    </Box>
  );
};
