import React, { FC } from 'react';
import { Flex } from 'theme-ui';
import { AboutMe } from 'components/AboutMe';
import { ProfileLinks } from 'components/ProfileLinks';

export const Main: FC<{}> = (): JSX.Element => {
  return (
    <main>
      <Flex variant={'styles.main'}>
        <ProfileLinks />
        <AboutMe />
      </Flex>
    </main>
  );
};
