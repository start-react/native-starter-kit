
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { TouchableOpacity } from 'react-native';

import { openDrawer, closeDrawer } from '../../actions/drawer';
import { setIndex } from '../../actions/list';
import { replaceRoute, replaceOrPushRoute } from '../../actions/route';

import { Container, Header, Title, Content, View, Text, Button, Icon } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';

import myTheme from '../../themes/base-theme';
import styles from './styles';

class Home extends Component {


    replaceRoute(route) {
        this.props.replaceRoute(route);
    }

    navigateTo(route, index) {
        this.props.closeDrawer();
        this.props.setIndex(index);
        this.props.replaceOrPushRoute(route);
    }

    render() {
        return (
            <Container theme={myTheme}style={{backgroundColor: '#565051'}}>
                <Header>
                    <Button transparent onPress={() => this.replaceRoute('login')}>
                        <Icon name='ios-power' />
                    </Button>

                    <Title>{(this.props.name) ? this.props.name : 'Home'}</Title>

                    <Button transparent onPress={this.props.openDrawer}>
                        <Icon name='ios-menu' />
                    </Button>
                </Header>

                <Content>
                    <Grid style={{marginTop: 20}}>
                        {this.props.list.map((item, i) =>
                            <Row key={i}>
                                <TouchableOpacity style={styles.row} onPress={() => this.navigateTo('blankPage', i)} >
                                    <Text style={styles.text}>
                                        {item}
                                    </Text>
                                </TouchableOpacity>
                            </Row>
                        )}

                    </Grid>
                </Content>
            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: ()=>dispatch(openDrawer()),
        closeDrawer: ()=>dispatch(closeDrawer()),
        replaceRoute:(route)=>dispatch(replaceRoute(route)),
        replaceOrPushRoute:(route)=>dispatch(replaceOrPushRoute(route)),
        setIndex:(index)=>dispatch(setIndex(index))

    }
}

function mapStateToProps(state) {
    return {
        name: state.user.name,
        list: state.list.list
    };
}

export default connect(mapStateToProps, bindAction)(Home);
