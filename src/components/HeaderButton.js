import React, { useState } from 'react';
import { motion } from 'framer-motion';

const HeaderButton = () => {
  const [position, setPosition] = useState('notHeader');
  const onClickAbout = () => {
    setPosition('header');
  };
  const onClickWorks = () => {
    setPosition('notHeader');
  };
  const buttonVariants = {
    header: { margin: '0rem' },
    notHeader: { margin: '0.5rem' },
  };
  const flexVariants = {
    header: { scale: '0.5' },
    notHeader: { scale: '1' },
  };
  return (
    <div className="rightHome">
      <motion.div
        className="flexContainerButtonHome"
        initial="notHeader"
        animate={position}
        variants={flexVariants}
      >
        <motion.button
          style={{ backgroundColor: '#535FD4' }}
          variants={buttonVariants}
          onClick={onClickAbout}
        >
          about
        </motion.button>
        <motion.button
          style={{ backgroundColor: '#E6DF47' }}
          variants={buttonVariants}
          onClick={onClickWorks}
        >
          works
        </motion.button>
        <motion.button
          style={{ backgroundColor: '#80D459' }}
          variants={buttonVariants}
        >
          contact
        </motion.button>
      </motion.div>
    </div>
  );
};

export default HeaderButton;
