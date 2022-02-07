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
    notHeader: { scale: 1 },
  };
  return (

    <motion.div
      className="flexContainerButtonHome"
      animate={setAnimate({ loc })}
      variants={flexVariants}
    >

      <Link to="about" style={{ textDecoration: 'none' }}>
        <motion.div
          className="navButton"
          style={{ backgroundColor: '#535FD4' }}
        >
          about
        </motion.div>
      </Link>

      <Link to="works" style={{ textDecoration: 'none' }}>
        <motion.div
          className="navButton"
          style={{ backgroundColor: '#E6DF47' }}
        >
          works
        </motion.div>
      </Link>

      <Link to="../" style={{ textDecoration: 'none' }}>
        <motion.div
          className="navButton"
          style={{ backgroundColor: '#80D459' }}
        >
          contact
        </motion.div>
      </Link>

    </motion.div>
  );
};

export default HeaderButton;
