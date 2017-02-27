
import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';

const launchscreen = require('../../../images/shadow.png');

import { setIndex } from '../../actions/list';

const {
  replaceAt,
} = actions;

class SplashPage extends Component {

  static propTypes = {
    navigation: React.PropTypes.shape({
			key: React.PropTypes.string,
		}),
  }

  componentWillMount() {
		console.log('splash, willMount, props: ', this.props);
    setTimeout(() => {
      this.props.replaceAt('splashscreen', { key: 'login' }, this.props.navigation.key);
    }, 1500);
  }

  render() { // eslint-disable-line class-methods-use-this
    return (
      <Image source={launchscreen} style={{ flex: 1, height: null, width: null }} />
    );
  }
}

function bindAction(dispatch) {
  return {
		replaceAt: (routeKey, route, key) => dispatch(replaceAt(routeKey, route, key)),
    setIndex: index => dispatch(setIndex(index)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(SplashPage);
