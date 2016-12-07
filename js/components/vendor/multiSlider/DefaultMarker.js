import React, {
  PropTypes,
} from 'react';

import {
  View,
  StyleSheet,
  Platform,
  TouchableHighlight,
} from 'react-native';

export default class DefaultMarker extends React.Component {
  static propTypes = {
    pressed: PropTypes.bool,
    pressedMarkerStyle: View.propTypes.style,
    markerStyle: View.propTypes.style
  };

  render() {
    return (
      <TouchableHighlight>
        <View
          style={[styles.markerStyle, this.props.markerStyle, this.props.pressed && styles.pressedMarkerStyle, this.props.pressed && this.props.pressedMarkerStyle]}
        />
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  markerStyle: {
    ...Platform.select({
      ios: {
        height: 30,
        width: 30,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#DDDDDD',
        backgroundColor: '#FFFFFF',
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 1,
        shadowOpacity: 0.2,
      },
      android: {
        height: 12,
        width: 12,
        borderRadius: 12,
        backgroundColor: '#0D8675',
      }
    }),
  },
  pressedMarkerStyle: {
    ...Platform.select({
      ios: {
      },
      android: {
        height: 20,
        width: 20,
        borderRadius: 20,
      },
    }),
  },
});
