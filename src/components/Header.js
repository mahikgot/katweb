import React from 'react';
import { motion } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';
import HeaderButton from './HeaderButton';
import Nameplate from './Nameplate';
import Logo from './Logo';

const Header = () => {
  const loc = useLocation().pathname;
  const setAnimate = (pathname) => {
    if (pathname === '/') return 'notHeader';
    return 'header';
  };

  const isHeader = setAnimate(loc);
  return (
    <div
      className="Home"
      isheader={isHeader}
    >

      <motion.div
        className="leftHome"
        animate={isHeader}
      >
        <Nameplate
          isHeader={isHeader}
        />
      </motion.div>
      <Logo
        isHeader={isHeader}
      />
      <motion.div
        layout
        className="navButtons"
        isheader={isHeader}
      >
        <HeaderButton
          isHeader={isHeader}
        />
      </motion.div>

      <Outlet />

    </div>
  );
};
export default Header;
