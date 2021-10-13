import React, { FC } from 'react';
import { Flex } from 'theme-ui';
import { AboutMe } from 'components/AboutMe';

export const Main: FC<{}> = (): JSX.Element => {
  return (
    <main>
      <Flex variant={'styles.main'}>
        <AboutMe />
      </Flex>
    </main>
  );
};
