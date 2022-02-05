import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setAnimate } from '../util/helper';

const HeaderButton = ({ loc }) => {
  HeaderButton.propTypes = {
    loc: PropTypes.string.isRequired,
  };
  const flexVariants = {
    header: { scale: 0.6 },
    notHeader: { scale: 0.9 },
  };
  return (

    <motion.div
      className="flexContainerButtonHome"
      animate={setAnimate({ loc })}
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
  );
};

export default HeaderButton;
