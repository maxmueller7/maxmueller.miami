import React, { FC } from 'react';

interface HamburgerProps {
  handleOpenMenu: () => void;
  open: boolean;
}

export const Hamburger: FC<HamburgerProps> = ({ handleOpenMenu, open }) => {
  return (
    <button
      onClick={handleOpenMenu}
      className={`hamburger hamburger--collapse ${open ? 'is-active' : ''}`}
    >
      <span className='hamburger-box'>
        <span className='hamburger-inner'></span>
      </span>
    </button>
  );
};
