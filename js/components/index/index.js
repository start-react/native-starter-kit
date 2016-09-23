

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Content, Text } from 'native-base';

import { pushNewRoute, replaceRoute } from '../../actions/route';


import myTheme from '../../themes/base-theme';


class Index extends Component {

  static propTypes = {
    replaceRoute: React.PropTypes.func,
  }

  replaceRoute() {
    this.props.replaceRoute();
  }

  render() {  // eslint-disable-line class-methods-use-this
    return (
      <Container theme={myTheme}>
        <Content>
          <Text style={{ marginTop: 180, marginLeft: 22, fontSize: 22, fontWeight: 'bold' }}>
            React Native - NativeBase Seed
          </Text>
        </Content>
      </Container>
    );
  }
}


function bindActions(dispatch) {
  return {
    replaceRoute: route => dispatch(replaceRoute(route)),
    pushNewRoute: route => dispatch(pushNewRoute(route)),
  };
}

export default connect(null, bindActions)(Index);
