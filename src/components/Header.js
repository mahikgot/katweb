import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';
import HeaderButton from './HeaderButton';

const Header = () => {
  const loc = useLocation().pathname;
  const setAnimate = (pathname) => {
    if (pathname === '/') return 'notHeader';
    return 'header';
  };
  const para = (isHeader) => {
    if (isHeader === 'header') {
      return null;
    }
    return (
      <>
        <h1
          className="nameHome"
        >
          Kat, 22
        </h1>
        <p>
          Heavily influenced by 2014 Tumblr and a shameless enjoyer of most mainstream things
        </p>
      </>
    );
  };
  const anim = setAnimate(loc);
  return (
    <motion.div
      className="Home"
      header={anim}
    >
      <motion.div
        className="leftHome"
        header={anim}
        animate={anim}
      >
        {para(anim)}
      </motion.div>
      <HeaderButton
        anim={anim}
      />
      <Outlet />
    </motion.div>
  );
};
export default Header;
