import React from 'react';
import PropTypes from 'prop-types';

const Categories = ({ loc }) => {
  Categories.propTypes = {
    loc: PropTypes.string.isRequired,
  };

  if (loc === 'about') {
    return null;
  }

  return (
    <>
    </>
  );
};
export default Categories;
