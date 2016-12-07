'use strict';

import React, {
  PropTypes,
} from 'react';

import {
  StyleSheet,
  PanResponder,
  View,
  TouchableHighlight,
  Platform,
} from 'react-native';

import DefaultMarker from './DefaultMarker';
import { createArray, valueToPosition, positionToValue } from './converters';

export default class MultiSlider extends React.Component {
    static propTypes = {
      values: PropTypes.arrayOf(PropTypes.number),

      onValuesChangeStart: PropTypes.func,
      onValuesChange: PropTypes.func,
      onValuesChangeFinish: PropTypes.func,

      sliderLength: PropTypes.number,
      touchDimensions: PropTypes.object,

      LeftMarker: PropTypes.func,
      RightMarker: PropTypes.func,

      min: PropTypes.number,
      max: PropTypes.number,
      step: PropTypes.number,

      optionsArray: PropTypes.array,

      containerStyle: View.propTypes.style,
      trackStyle: View.propTypes.style,
      selectedStyle: View.propTypes.style,
      unselectedStyle: View.propTypes.style,
      markerStyle: View.propTypes.style,
      pressedMarkerStyle: View.propTypes.style,
    };

    static defaultProps = {
      values: [0],
      onValuesChangeStart: () => {
        console.log('press started');
      },
      onValuesChange: (values) => {
        console.log('changing', values);
      },
      onValuesChangeFinish: (values) => {
        console.log('changed', values);
      },
      step: 1,
      min: 0,
      max: 10,
      touchDimensions: {
        height: 50,
        width: 50,
        borderRadius: 15,
        slipDisplacement: 200,
      },
      LeftMarker: DefaultMarker,
      RightMarker: DefaultMarker,
      sliderLength: 280,
    };

    constructor(props) {
      super(props);

      this.optionsArray = this.props.optionsArray || createArray(this.props.min, this.props.max, this.props.step);
      this.stepLength = this.props.sliderLength / this.optionsArray.length;

      var initialValues = this.props.values.map(value => valueToPosition(value, this.optionsArray, this.props.sliderLength));

      this.state = {
        pressedOne: true,
        valueOne: this.props.values[0],
        valueTwo: this.props.values[1],
        pastOne: initialValues[0],
        pastTwo: initialValues[1],
        positionOne: initialValues[0],
        positionTwo: initialValues[1],
      };
    }

    componentWillMount() {
      var customPanResponder = (start, move, end) => {
        return PanResponder.create({
          onStartShouldSetPanResponder: (evt, gestureState) => true,
          onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
          onMoveShouldSetPanResponder: (evt, gestureState) => true,
          onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
          onPanResponderGrant: (evt, gestureState) => start(),
          onPanResponderMove: (evt, gestureState) => move(gestureState),
          onPanResponderTerminationRequest: (evt, gestureState) => true,
          onPanResponderRelease: (evt, gestureState) => end(gestureState),
          onPanResponderTerminate: (evt, gestureState) => end(gestureState),
          onShouldBlockNativeResponder: (evt, gestureState) => true
        })
      };

      this._panResponderOne = customPanResponder(this.startOne, this.moveOne, this.endOne);
      this._panResponderTwo = customPanResponder(this.startTwo, this.moveTwo, this.endTwo);
    }

    componentWillReceiveProps(nextProps) {
      if (this.state.onePressed || this.state.twoPressed) return;

      let position, nextState = {};
      if (nextProps.values[0] !== this.state.valueOne) {
        position = valueToPosition(nextProps.values[0], this.optionsArray, this.props.sliderLength);
        nextState.valueOne = nextProps.values[0];
        nextState.pastOne = position;
        nextState.positionOne = position;
      }
      if (nextProps.values[1] !== this.state.valueTwo) {
        position = valueToPosition(nextProps.values[1], this.optionsArray, this.props.sliderLength);
        nextState.valueTwo = nextProps.values[1];
        nextState.pastTwo = position;
        nextState.positionTwo = position;
      }

      if (nextState != {}) {
        this.setState(nextState);
      }
    }

    startOne = () => {
      this.props.onValuesChangeStart();
      this.setState({
        onePressed: !this.state.onePressed
      });
    }

    startTwo = () => {
      this.props.onValuesChangeStart();
      this.setState({
        twoPressed: !this.state.twoPressed
      });
    }

    moveOne = (gestureState) => {
      var unconfined = gestureState.dx + this.state.pastOne;
      var bottom     = 0;
      var trueTop    = this.state.positionTwo - this.stepLength;
      var top        = (trueTop === 0) ? 0 : trueTop || this.props.sliderLength;
      var confined   = unconfined < bottom ? bottom : (unconfined > top ? top : unconfined);
      var value      = positionToValue(this.state.positionOne, this.optionsArray, this.props.sliderLength);

      var slipDisplacement = this.props.touchDimensions.slipDisplacement;

      if (Math.abs(gestureState.dy) < slipDisplacement || !slipDisplacement) {
        this.setState({
          positionOne: confined,
        });
      }

      if (value !== this.state.valueOne) {
        this.setState({
          valueOne: value
        }, () => {
          var change = [this.state.valueOne];
          if (this.state.valueTwo) {
            change.push(this.state.valueTwo);
          }
          this.props.onValuesChange(change);
        });
      }
    }

    moveTwo = (gestureState) => {
      var unconfined  = gestureState.dx + this.state.pastTwo;
      var bottom      = this.state.positionOne + this.stepLength;
      var top         = this.props.sliderLength;
      var confined    = unconfined < bottom ? bottom : (unconfined > top ? top : unconfined);
      var value       = positionToValue(this.state.positionTwo, this.optionsArray, this.props.sliderLength);
      var slipDisplacement = this.props.touchDimensions.slipDisplacement;

      if (Math.abs(gestureState.dy) < slipDisplacement || !slipDisplacement) {
        this.setState({
          positionTwo: confined,
        });
      }
      if ( value !== this.state.valueTwo ) {
        this.setState({
          valueTwo: value,
        }, () => {
          this.props.onValuesChange([this.state.valueOne, this.state.valueTwo]);
        });
      }
    }

    endOne = (gestureState) => {
      this.setState({
        pastOne: this.state.positionOne,
        onePressed: !this.state.onePressed
      }, () => {
        var change = [this.state.valueOne];
        if (this.state.valueTwo) {
          change.push(this.state.valueTwo);
        }
        this.props.onValuesChangeFinish(change);
      });
    }

    endTwo = (gestureState) => {
      this.setState({
        twoPressed: !this.state.twoPressed,
        pastTwo: this.state.positionTwo,
      }, () => {
        this.props.onValuesChangeFinish([this.state.valueOne, this.state.valueTwo]);
      });
    }

    render() {

      const { positionOne, positionTwo } = this.state;
      const { selectedStyle, unselectedStyle, sliderLength } = this.props;
      const twoMarkers = positionTwo;

      const trackOneLength = positionOne;
      const trackOneStyle = twoMarkers ? unselectedStyle : selectedStyle || styles.selectedTrack;
      const trackThreeLength = twoMarkers ? sliderLength - (positionTwo) : 0;
      const trackThreeStyle = unselectedStyle;
      const trackTwoLength = sliderLength - trackOneLength - trackThreeLength;
      const trackTwoStyle = twoMarkers ? selectedStyle || styles.selectedTrack : unselectedStyle;
      const Marker = this.props.LeftMarker;
      const Marker2 = this.props.RightMarker;
      const { slipDisplacement, height, width, borderRadius } = this.props.touchDimensions;
      const touchStyle = {
        borderRadius: borderRadius || 0
      };

      const markerContainerOne = { top: -24, left : trackOneLength - 24 };

      const markerContainerTwo = { top: -24, right: trackThreeLength - 24 };

      return (
        <View style={[styles.container, this.props.containerStyle]}>
          <View style={[styles.fullTrack, { width: sliderLength }]}>
            <View style={[styles.track, this.props.trackStyle, trackOneStyle, { width: trackOneLength } ]} />
            <View style={[styles.track, this.props.trackStyle, trackTwoStyle, { width: trackTwoLength } ]} />
            {twoMarkers && (
              <View style={[styles.track, this.props.trackStyle, trackThreeStyle, { width: trackThreeLength } ]} />
            )}
            <View style={[styles.markerContainer, markerContainerOne]}>
              <View
                style={[styles.touch, touchStyle]}
                ref={component => this._markerOne = component}
                {...this._panResponderOne.panHandlers}
              >
                <Marker
                  pressed={this.state.onePressed}
                  markerStyle={[styles.marker, this.props.markerStyle]}
                  pressedMarkerStyle={this.props.pressedMarkerStyle}
                />
              </View>
            </View>
            {twoMarkers && (positionOne !== this.props.sliderLength) && (
              <View style={[styles.markerContainer, markerContainerTwo]}>
                <View
                  style={[styles.touch, touchStyle]}
                  ref={component => this._markerTwo = component}
                  {...this._panResponderTwo.panHandlers}
                >
                  <Marker2
                    pressed={this.state.twoPressed}
                    markerStyle={this.props.markerStyle}
                    pressedMarkerStyle={this.props.pressedMarkerStyle}
                  />
                </View>
              </View>
            )}
          </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 50,
  },
  fullTrack: {
    flexDirection: 'row',
  },
  track: {
    ...Platform.select({
      ios: {
        height: 2,
        borderRadius: 2,
        backgroundColor: '#A7A7A7',
      },
      android: {
        height: 2,
        backgroundColor: '#CECECE',
      }
    }),
  },
  selectedTrack: {
    ...Platform.select({
      ios: {
        backgroundColor: '#095FFF',
      },
      android: {
        backgroundColor: '#0D8675',
      },
    }),
  },
  markerContainer: {
    position: 'absolute',
    width: 48,
    height: 48,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  touch: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
});
