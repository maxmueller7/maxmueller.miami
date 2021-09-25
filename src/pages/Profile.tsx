import React, { FC } from 'react';
import { Flex } from 'theme-ui';
import { AboutMe } from 'components/AboutMe';
import { ProfileLinks } from 'components/ProfileLinks';

interface IProfileProps {}

export const Profile: FC<IProfileProps> = (): JSX.Element => {
  return (
    <Flex variant={'styles.profile'}>
      <AboutMe />
    </Flex>
  );
};
