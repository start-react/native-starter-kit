import React, { Component } from 'react';
import { ProgressBarAndroid } from 'react-native';


export default class SpinnerNB extends Component {

  render() {

    return (
      <ProgressBarAndroid
        {...this.props}
        styleAttr="Horizontal"
        indeterminate={false}
        progress={this.props.progress ? this.props.progress / 100 : 0.5}
        color={this.props.color ? this.props.color : '#FFF'}
      />
        );
  }

}
