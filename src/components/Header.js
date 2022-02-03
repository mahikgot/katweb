import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderButton from './HeaderButton';

const Header = () => (
  <div>
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
    <Outlet />
  </div>
);
export default Header;
