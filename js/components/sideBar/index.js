import React, { Component } from 'react';
import { View } from 'native-base';
import { connect } from 'react-redux';
import { closeDrawer } from '../../actions/drawer';
import { replaceOrPushRoute } from '../../actions/route';

class SideBar extends Component {

  static propTypes = {
    replaceRoute: React.PropTypes.func,
  }

  static render() {
    return (
      <View />
      );
  }

  replaceRoute() {
    this.props.replaceRoute();
  }
}

function bindAction(dispatch) {
  return {
    closeDrawer: () => dispatch(closeDrawer()),
    replaceOrPushRoute: route => dispatch(replaceOrPushRoute(route)),
  };
}

export default connect(null, bindAction)(SideBar);
