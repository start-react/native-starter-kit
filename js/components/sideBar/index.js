import React, { Component } from 'react';
import { View } from 'native-base';
import { connect } from 'react-redux';
import { closeDrawer } from '../../actions/drawer';
import { replaceOrPushRoute } from '../../actions/route';

class SideBar extends Component {

  static propTypes = {
    replaceRoute: React.PropTypes.func,
  }

  replaceRoute() {
    this.props.replaceRoute();
  }

  render() {  // eslint-disable-line class-methods-use-this
    return (
      <View />
      );
  }
}

function bindAction(dispatch) {
  return {
    closeDrawer: () => dispatch(closeDrawer()),
    replaceOrPushRoute: route => dispatch(replaceOrPushRoute(route)),
  };
}

export default connect(null, bindAction)(SideBar);
