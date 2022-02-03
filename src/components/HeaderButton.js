import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const HeaderButton = ({ anim }) => {
  HeaderButton.propTypes = {
    anim: PropTypes.string.isRequired,
  };
  const flexVariants = {
    header: { scale: 0.5 },
    notHeader: { scale: 1 },
  };

  return (
    <div className="rightHome">
      <motion.div
        className="flexContainerButtonHome"
        animate={anim}
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
