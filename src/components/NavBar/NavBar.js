import React, { Component } from "react";
import "./NavBar.scss";

import NavBarItem from "./NavBarItem";

class NavBar extends Component {

  constructor(props){
    super(props);
    this.handleMouseDown = this.handleMouseDown.bind(this);
  }

  handleMouseDown(e) {
    this.props.onHideMobileNavigationMenu();
    e.stopPropagation();
  }

  render() {

    let {
      visibleMobileMenu,
      onHideMobileNavigationMenu
    } = this.props;

    const navBarClass = visibleMobileMenu ? "show-menu" : "hide-menu";

    return (
      <div>
        <div onMouseDown={this.handleMouseDown} className={`overlay-container ${navBarClass}`}></div>
        <div
          className={`sidebar-container ${navBarClass}`}>
          <aside className="row">

            <ul className="sidebar">
              <NavBarItem
                path="/about"
                onHideMobileNavigationMenu={onHideMobileNavigationMenu}
                linkText="About us"
              />

              <NavBarItem
                path="/contact"
                onHideMobileNavigationMenu={onHideMobileNavigationMenu}
                linkText="Contact us"
               />
            </ul>
          </aside>
        </div>
      </div>
    );
  }
}

export default NavBar;

