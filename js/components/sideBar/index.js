
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { closeDrawer } from '../../actions/drawer';
import { setIndex } from '../../actions/list';
import { replaceOrPushRoute } from '../../actions/route';

import {Content, Text, List, ListItem } from 'native-base';

import styles from './style';

class SideBar extends Component {

    navigateTo(route) {
        this.props.closeDrawer();
        this.props.setIndex(undefined);
        this.props.replaceOrPushRoute(route);
    }

    render(){
        return (
            <Content style={styles.sidebar} >
                <List foregroundColor={'white'}>
                    <ListItem button onPress={() => this.navigateTo('home')} >
                        <Text>Home</Text>
                    </ListItem>
                    <ListItem button onPress={() => this.navigateTo('blankPage')} >
                        <Text>Blank Page</Text>
                    </ListItem>
                </List>
            </Content>
        );
    }
}

function bindAction(dispatch) {
    return {
        closeDrawer: ()=>dispatch(closeDrawer()),
        replaceOrPushRoute:(route)=>dispatch(replaceOrPushRoute(route)),
        setIndex:(index)=>dispatch(setIndex(index))
    }
}

export default connect(null, bindAction)(SideBar);
