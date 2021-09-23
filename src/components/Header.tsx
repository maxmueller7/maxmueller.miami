import React, { FC } from 'react';
import { Box, Flex, Paragraph } from 'theme-ui';
import { ThemeSwitcher } from './ThemeSwitcher';

interface IHeaderProps {}

export const Header: FC<IHeaderProps> = (): JSX.Element => {
  return (
    <header>
      <Box variant={'styles.header'}>
        <Flex sx={{ flexFlow: 'column' }}>
          <Paragraph variant={'styles.h1'}>Hello, I'm Max</Paragraph>
          <Paragraph variant={'styles.h3'}>
            I'm a Full-Stack Software Engineer.
          </Paragraph>
        </Flex>
        <ThemeSwitcher />
      </Box>
    </header>
  );
};
