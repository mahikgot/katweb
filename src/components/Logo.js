import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import logo from '../tite.svg';

const Logo = ({ isHeader }) => {
  Logo.propTypes = {
    isHeader: PropTypes.string.isRequired,
  };
  if (isHeader === 'notHeader') {
    return null;
  }
  return (
    <motion.img
      src={logo}
      alt=""
      className="logo"
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
    />
  );
};
export default Logo;
