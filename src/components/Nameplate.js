import React from 'react';
import PropTypes from 'prop-types';

const Nameplate = ({ isHeader }) => {
  Nameplate.propTypes = {
    isHeader: PropTypes.string.isRequired,
  };
  if (isHeader === 'header') {
    return null;
  }
  return (
    <>
      <h1
        className="nameHome"
      >
        Kat, 22
      </h1>
      <p className="descHome">
        Heavily influenced by 2014 Tumblr and a shameless enjoyer of most mainstream things
      </p>
    </>
  );
};
export default Nameplate;
