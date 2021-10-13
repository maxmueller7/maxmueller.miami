import React, { FC } from 'react';
import './Hamburger.scss';

interface HamburgerProps {
  handleToggleMenu: () => void;
  open: boolean;
}

export const Hamburger: FC<HamburgerProps> = ({ handleToggleMenu, open }) => {
  return (
    <button
      onClick={handleToggleMenu}
      className={`hamburger hamburger--collapse ${open ? 'is-active' : ''}`}
      type={'button'}
    >
      <span className='hamburger-box'>
        <span className='hamburger-inner'></span>
      </span>
    </button>
  );
};
