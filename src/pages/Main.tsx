import React, { FC } from 'react';
import { Box, Flex } from 'theme-ui';
import { AboutMe } from 'components/AboutMe';
import { ProfileLinks } from 'components/ProfileLinks';

interface IMainProps {}

export const Main: FC<IMainProps> = ({}): JSX.Element => {
  return (
    <main>
      <Flex variant={'styles.main'}>
        <ProfileLinks />
        <AboutMe />
      </Flex>
    </main>
  );
};
