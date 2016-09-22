
import React, { Component } from 'react';
import { View } from 'native-base';


export default class SplashPage extends Component {


  static render() {
    return (
      <View />
    );
  }

  propTypes = {
    navigator: React.PropTypes.Object,
  }

  componentWillMount() {
    const navigator = this.props.navigator;
    setTimeout(() => {
      navigator.replace({
        id: 'index',
      });
    }, 1500);
  }
}
