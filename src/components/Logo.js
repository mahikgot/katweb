import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../tite.svg';

const Logo = ({ loc }) => {
  Logo.propTypes = {
    loc: PropTypes.string.isRequired,
  };
  if (loc === '/') {
    return null;
  }
  return (
    <Link to="/">
      <motion.img
        src={logo}
        alt=""
        className="logo"
        initial={{ opacity: 0, y: '100%' }}
        animate={{ opacity: 1, y: 0 }}
      />
    </Link>
  );
};
export default Logo;
