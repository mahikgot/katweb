import React from 'react';
import { motion } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';
import HeaderButton from './HeaderButton';
import Nameplate from './Nameplate';
import Logo from './Logo';
import { setAnimate } from '../util/helper';

const Header = () => {
  const loc = useLocation().pathname;
  return (
    <div
      className="Home"
      loc={loc}
    >

      <motion.div
        className="leftHome"
        animate={setAnimate({ loc })}
      >
        <Nameplate
          loc={loc}
        />
      </motion.div>
      <Logo
        loc={loc}
      />
      <motion.div
        layout
        className="navButtons"
        loc={loc}
      >
        <HeaderButton
          loc={loc}
        />
      </motion.div>

      <Outlet />

    </div>
  );
};
export default Header;
