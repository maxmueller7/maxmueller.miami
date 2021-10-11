import React, { FC, useCallback, useState } from 'react';
import { Container, Divider, Flex, Paragraph } from 'theme-ui';
// import { MySitesLinks } from 'utils';
import { ProfileLinks } from './ProfileLinks';

export const Header: FC<{}> = (): JSX.Element => {
  const [hamburgerActive, setHamburgerActive] = useState<boolean>(false);

  const handleThemeSwitch = useCallback<() => void>(() => {
    setHamburgerActive((hamburgerActive) => !hamburgerActive);
  }, [setHamburgerActive]);

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
          <button
            onClick={handleThemeSwitch}
            className={`hamburger hamburger--collapse ${
              hamburgerActive ? 'is-active' : ''
            }`}
          >
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
