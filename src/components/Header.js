import React from 'react';
import { motion } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';
import HeaderButton from './HeaderButton';

const Header = () => {
  const loc = useLocation().pathname;
  const pVariants = {
    header: { opacity: 0 },
    notHeader: { opacity: 1 },
  };
  const setAnimate = (pathname) => {
    if (pathname === '/') return 'notHeader';
    return 'header';
  };
  const anim = setAnimate(loc);
  return (
    <div>
      <div className="flexContainerHome">
        <div className="leftHome">
          <h1 className="nameHome">
            Kat, 22
          </h1>
          <motion.p
            initial="notHeader"
            animate={anim}
            variants={pVariants}
          >
            Heavily influenced by 2014 Tumblr and a shameless enjoyer of most mainstream things
          </motion.p>
        </div>
        <HeaderButton
          anim={anim}
        />
      </div>
      <Outlet />
    </div>
  );
};
export default Header;
