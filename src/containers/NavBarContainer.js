import { connect } from "react-redux";
import NavBar from "../components/NavBar/NavBar";
import {
  hideMobileNavigationMenu
} from "../actions/BurgerAction";

const mapStateToProps = (state, ownProps) => {
  return {
    visibleMobileMenu: state.BurgerMenuReducer.visibleMobileMenu,
    ...ownProps
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onHideMobileNavigationMenu: () => dispatch(hideMobileNavigationMenu())
  }
};

const NavBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);

export default NavBarContainer;

