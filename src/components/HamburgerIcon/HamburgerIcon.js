import React, { Component } from "react";
import "./HamburgerIcon.scss";

class HamburgerIcon extends Component{

  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {

    const {
      showSideBarMenu,
      onShowMobileNavigationMenu,
      onHideMobileNavigationMenu
    } = this.props;

    showSideBarMenu ? onShowMobileNavigationMenu() : onHideMobileNavigationMenu();
  }

  render() {

    return(
      <div className="burger-container">
        <a className="burger-icon-link" onClick={this.onClickHandler} href="#">
          <span className="burger-span-element white-burger-icon-color"></span>
          <span className="burger-span-element white-burger-icon-color"></span>
          <span className="burger-span-element white-burger-icon-color"></span>
        </a>
      </div>
    );
  }
}

export default HamburgerIcon;

