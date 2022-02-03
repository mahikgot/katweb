import React from 'react';
import HeaderButton from './HeaderButton';

const Header = () => (
  <div className="flexContainerHome">
    <div className="leftHome">
      <h1 className="nameHome">
        Kat, 22
      </h1>
      <p>
        Heavily influenced by 2014 Tumblr and a shameless enjoyer of most mainstream things
      </p>
    </div>
    <HeaderButton />
  </div>
);
export default Header;
