import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeaderButton = () => {
  const [position, setPosition] = useState('notHeader');
  const onClickAbout = () => {
    setPosition('header');
  };
  const onClickWorks = () => {
    setPosition('notHeader');
  };
  const buttonVariants = {
    header: {},
    notHeader: {},
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
        <Link to="about">
          <motion.button
            style={{ backgroundColor: '#535FD4' }}
            variants={buttonVariants}
            onClick={onClickAbout}
          >
            about
          </motion.button>
        </Link>
        <Link to="works">
          <motion.button
            style={{ backgroundColor: '#E6DF47' }}
            variants={buttonVariants}
            onClick={onClickWorks}
          >
            works
          </motion.button>
        </Link>
        <Link to="contact">
          <motion.button
            style={{ backgroundColor: '#80D459' }}
            variants={buttonVariants}
          >
            contact
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default HeaderButton;
