/**
 * Created by kylefang on 4/28/16.
 * @flow
 */

'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Drawer} from 'native-base';
import {BackAndroid, Platform, StatusBar} from 'react-native';
import {closeDrawer} from './actions/drawer';
import {popRoute} from './actions/route';
import Navigator from 'Navigator';

import Index from './components/index/';
import SplashPage from './components/splashscreen/';
import SideBar from './components/sideBar';
import {statusBarColor} from './themes/base-theme';


Navigator.prototype.replaceWithAnimation = function (route) {
  const activeLength = this.state.presentedIndex + 1;
  const activeStack = this.state.routeStack.slice(0, activeLength);
  const activeAnimationConfigStack = this.state.sceneConfigStack.slice(0, activeLength);
  const nextStack = activeStack.concat([route]);
  const destIndex = nextStack.length - 1;
  const nextSceneConfig = this.props.configureScene(route, nextStack);
  const nextAnimationConfigStack = activeAnimationConfigStack.concat([nextSceneConfig]);

  const replacedStack = activeStack.slice(0, activeLength - 1).concat([route]);
  this._emitWillFocus(nextStack[destIndex]);
  this.setState({
    routeStack: nextStack,
    sceneConfigStack: nextAnimationConfigStack
  }, () => {
    this._enableScene(destIndex);
    this._transitionTo(destIndex, nextSceneConfig.defaultTransitionVelocity, null, () => {
      this.immediatelyResetRouteStack(replacedStack);
    });
  });
};

export var globalNav = {};

class AppNavigator extends Component {

  static propTypes = {
    routes: React.PropTypes.array,
    drawerState: React.PropTypes.string,
    closeDrawer: React.PropTypes.func,
    popRoute: React.PropTypes.func
  }

  constructor(props){
    super(props);

  }

  componentDidMount() {
    globalNav.navigator = this._navigator;

    BackAndroid.addEventListener('hardwareBackPress', () => {
      var routes = this._navigator.getCurrentRoutes();

      if (routes[routes.length - 1].id === 'home' || routes[routes.length - 1].id === 'login') {
                // CLose the app
        return false;
      } else {
        this.popRoute();
        return true;
      }

    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.props.routes, 'wdwdwd');
    if (this.props.drawerState === 'opened') {
      this.openDrawer();
    }

    if (this.props.drawerState === 'closed') {
      this._drawer.close();
    }
  }

  popRoute() {
    this.props.popRoute();
  }

  openDrawer() {
    this._drawer.open();
  }

  closeDrawer() {
    if (this.props.drawerState === 'opened') {
      this._drawer.close();
      this.props.closeDrawer();
    }
  }

  renderScene(route, navigator) {
    switch (route.id) {
      case 'splashscreen':
        return <SplashPage navigator={navigator} />;
      case 'index':
        return <Index navigator={navigator} />;
      default :
        return <Index navigator={navigator}  />;
    }
  }

  render() {
    return (
            <Drawer
                ref={(ref) => {
                  this._drawer = ref;
                }}
                type="overlay"
                content={<SideBar navigator={this._navigator} />}
                tapToClose
                acceptPan={false}
                onClose={() => this.closeDrawer()}
                openDrawerOffset={0.2}
                panCloseMask={0.2}
                negotiatePan
            >
                <StatusBar
                    backgroundColor={statusBarColor}
                    barStyle="light-content"
                />
                <Navigator
                    ref={(ref) => {
                      this._navigator = ref;
                    }}
                    configureScene={(route) => {
                      return Navigator.SceneConfigs.FloatFromRight;
                    }}
                    initialRoute={{id: (Platform.OS === 'android') ? 'splashscreen' : 'index', statusBarHidden: true}}
                    renderScene={this.renderScene}
                />
            </Drawer>
        );


  }
}

function bindAction(dispatch) {
  return {
    closeDrawer: () => dispatch(closeDrawer()),
    popRoute: () => dispatch(popRoute())
  };
}

const mapStateToProps = (state) => {
  return {
    drawerState: state.drawer.drawerState,
    routes: state.route.routes
  };
};

export default connect(mapStateToProps, bindAction)(AppNavigator);
