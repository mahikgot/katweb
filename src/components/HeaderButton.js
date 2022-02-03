import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const HeaderButton = () => {
  const loc = useLocation().pathname;
  const flexVariants = {
    header: { scale: 0.5 },
    notHeader: { scale: 1 },
  };
  const setAnimate = (pathname) => {
    if (pathname === '/') return 'notHeader';
    return 'header';
  };
  return (
    <div className="rightHome">
      <motion.div
        className="flexContainerButtonHome"
        animate={setAnimate(loc)}
        variants={flexVariants}
      >
        <Link to="about">
          <motion.button
            style={{ backgroundColor: '#535FD4' }}
          >
            about
          </motion.button>
        </Link>
        <Link to="works">
          <motion.button
            style={{ backgroundColor: '#E6DF47' }}
          >
            works
          </motion.button>
        </Link>
        <Link to="../">
          <motion.button
            style={{ backgroundColor: '#80D459' }}
          >
            contact
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default HeaderButton;
