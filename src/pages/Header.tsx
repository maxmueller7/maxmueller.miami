import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { Box, Container, Divider, Flex, Paragraph } from 'theme-ui';
import { Hamburger } from '../components/Hamburger';
// import { MySitesLinks } from 'utils';
import { ProfileLinks } from '../components/ProfileLinks';
import { Menu } from '../components/Menu';

export const Header: FC<{}> = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const [hideMenu, setHideMenu] = useState<boolean>(false);

  const mediaQueryList = window.matchMedia('(min-width: 480px)');
  mediaQueryList.addEventListener('change', (event: MediaQueryListEvent) => {
    setHideMenu(event.matches);
    if (event.matches) {
      setOpen(false);
    }
  });

  const handleOpenMenu = useCallback<() => void>(() => {
    setOpen((open) => !open);
  }, [setOpen]);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let handler = (event: any) => {
      if (!menuRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  return (
    <header>
      <Container variant={'styles.header.headerContainer'}>
        <Flex variant={'styles.header.headerContent'}>
          <Paragraph variant={'styles.h4'}>max mueller</Paragraph>
          {hideMenu ? (
            <ProfileLinks />
          ) : (
            <Hamburger handleOpenMenu={handleOpenMenu} open={open} />
          )}
        </Flex>
        <Divider variant={'styles.hr'} />

        {!hideMenu && (
          <Box ref={menuRef}>
            <Menu open={open} />
          </Box>
        )}
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
