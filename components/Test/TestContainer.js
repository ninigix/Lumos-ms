import React from "react";
import { connect } from "react-redux";

import MenuComponent from "./TestComponent";
import * as actions from "../../actions/lightActions";
import { getStatus } from "../../selectors/lightSelector";

const MenuContainer = props => <MenuComponent {...props} />;

const mapStateToProps = state => ({
  lightSwitches: getStatus(state)
});

const mapDispatchToProps = dispatch => ({
  getLightSwitches: () => dispatch(actions.getLightSwitches.request())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuContainer);
