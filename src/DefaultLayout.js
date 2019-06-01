import React from 'react';
import HamburgerIconContainer from "./containers/HamburgerIconContainer.js";
import NavBarContainer from "./containers/NavBarContainer.js";
import { Route } from "react-router-dom";
import "./DefaultLayout.scss";

const DefaultLayout = ({component: Component, ...rest}) => {

  return (
    <Route {...rest} render={matchProps => (
      <div className="default-layout">
        <HamburgerIconContainer showSideBarMenu />

        <NavBarContainer />

        <div className="main-container">
          <Component {...matchProps} />
        </div>
        <div className="layout-footer">Footer</div>
      </div>
    )} />
  )
};

export default DefaultLayout;
