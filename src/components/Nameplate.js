import React from 'react';
import PropTypes from 'prop-types';

const Nameplate = ({ loc }) => {
  Nameplate.propTypes = {
    loc: PropTypes.string.isRequired,
  };
  if (loc !== '/') {
    return null;
  }
  return (
    <div className="leftHomeItem">
      <h1
        className="nameHome"
      >
        Kat, 22
      </h1>
      <p className="descHome">
        Heavily influenced by 2014 Tumblr and a shameless enjoyer of most mainstream things
      </p>
    </div>
  );
};
export default Nameplate;
