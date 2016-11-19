
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Content, Text, List, ListItem } from 'native-base';

import { setIndex } from '../../actions/list';
import { closeDrawer } from '../../actions/drawer';
import { replaceOrPushRoute } from '../../actions/route';
import myTheme from '../../themes/base-theme';
import styles from './style';
import I18n from '../../../i18n';

class SideBar extends Component {

  static propTypes = {
    closeDrawer: React.PropTypes.func,
    setIndex: React.PropTypes.func,
    replaceOrPushRoute: React.PropTypes.func,
  }

  navigateTo(route) {
    this.props.closeDrawer();
    this.props.setIndex(undefined);
    this.props.replaceOrPushRoute(route);
  }

  render() {
    return (
      <Content theme={myTheme} style={styles.sidebar} >
        <List>
          <ListItem button onPress={() => this.navigateTo('home')} >
            <Text>{I18n.t('SIDEBAR.NAV.HOME')}</Text>
          </ListItem>
          <ListItem button onPress={() => this.navigateTo('blankPage')} >
            <Text>{I18n.t('SIDEBAR.NAV.BLANKPAGE')}</Text>
          </ListItem>
        </List>
      </Content>
    );
  }
}

function bindAction(dispatch) {
  return {
    closeDrawer: () => dispatch(closeDrawer()),
    replaceOrPushRoute: route => dispatch(replaceOrPushRoute(route)),
    setIndex: index => dispatch(setIndex(index)),
  };
}

export default connect(null, bindAction)(SideBar);
