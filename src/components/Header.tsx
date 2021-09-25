import React, { FC } from 'react';
import { Flex, Paragraph } from 'theme-ui';
import { ProfileLinks } from './ProfileLinks';

interface IHeaderProps {}

export const Header: FC<IHeaderProps> = (): JSX.Element => {
  return (
    <header>
      <Flex variant={'styles.header'}>
        <Flex
          sx={{
            flexFlow: 'column',
            justifyContent: 'center',
          }}
        >
          <Paragraph variant={'styles.h1'}>
            Hey. <br /> I'm Max
          </Paragraph>
          <Paragraph variant={'styles.h3'}>
            I'm a Full-Stack Software Engineer.
          </Paragraph>
          <ProfileLinks />
        </Flex>
      </Flex>
    </header>
  );
};
