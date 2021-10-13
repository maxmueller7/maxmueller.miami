import React, { FC } from 'react';
import { Flex } from 'theme-ui';
import { ProfileLinks } from './ProfileLinks';

interface MenuProps {
  open: boolean;
}

export const Menu: FC<MenuProps> = ({ open }): JSX.Element => {
  return (
    <Flex variant={open ? 'styles.menu.open' : 'styles.menu'}>
      <ProfileLinks flexFlowProp={'column'} />
    </Flex>
  );
};
