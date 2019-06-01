import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBarItem extends Component {

  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  getPath() {
    return this.props.path;
  }

  onClickHandler() {
    const { onHideMobileNavigationMenu } = this.props;
    onHideMobileNavigationMenu && onHideMobileNavigationMenu();
  }

  render() {
    const { className, linkText } = this.props;
    return (
      <li className={className}>
        <Link to={this.getPath()} onClick={this.onClickHandler}>
          {linkText}
        </Link>
      </li>
    );
  }
}

export default NavBarItem;
