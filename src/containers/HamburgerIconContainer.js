import { connect } from "react-redux";
import {
  hideMobileNavigationMenu,
  showMobileNavigationMenu
} from "../actions/BurgerAction";

import HamburgerIcon from "../components/HamburgerIcon/HamburgerIcon";

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onHideMobileNavigationMenu: () => dispatch(hideMobileNavigationMenu()),
    onShowMobileNavigationMenu: () => dispatch(showMobileNavigationMenu())
  }
};

const HamburgerIconContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HamburgerIcon);

export default HamburgerIconContainer;
