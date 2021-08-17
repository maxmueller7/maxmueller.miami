import React, { FC, useContext } from 'react';
import { Box, Paragraph } from 'theme-ui';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import { LanguageContext } from 'hooks/Contexts';

export const Header: FC<{}> = (): JSX.Element => {
  const helloMsg = useContext(LanguageContext);
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
        {helloMsg} I'm Max.
      </Paragraph>
      <ThemeSwitcher />
    </Box>
  );
};
