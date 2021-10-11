import React, { FC, useState } from 'react';
import { Container, Divider, Flex, Image, Paragraph } from 'theme-ui';
import { MySitesLinks } from 'utils';
import { ProfileLinks } from './ProfileLinks';

interface HeaderProps {}

export const Header: FC<HeaderProps> = ({}): JSX.Element => {
  const [hamburgerActive, setHamburgerActive] = useState<boolean>(false);
  
  return (
    <header>
      <Container
        sx={{
          display: 'flex',
          flexFlow: 'column',
          alignItems: 'center',
          height: '100vh',
          width: '85vw',
        }}
      >
        <Flex
          sx={{
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            py: '40px',
          }}
        >
          <Paragraph variant={'styles.h4'}>max mueller</Paragraph>
          <ProfileLinks />
          <button className={`hamburger hamburger--collapse ${}`} type='button'>
            <span className='hamburger-box'>
              <span className='hamburger-inner'></span>
            </span>
          </button>
        </Flex>

        <Divider variant={'styles.hr'} />
        <Flex variant={'styles.header'}>
          <Flex sx={{ flexFlow: 'column' }}>
            <Paragraph variant={'styles.h1'}>Hey.</Paragraph>
            <Paragraph variant={'styles.h3'}>
              I'm a Full-Stack Software Engineer.
            </Paragraph>
          </Flex>
          {/* <Image
            sx={{
              maxHeight: '230px',
              width: 'auto',
              border: (theme) => `solid 1px ${theme.colors?.primary}`,
            }}
            alt='Max Mueller Profile Pic'
            src={`${MySitesLinks.GITHUB}.png?`}
          /> */}
        </Flex>
      </Container>
    </header>
  );
};
