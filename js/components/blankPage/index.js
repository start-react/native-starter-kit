
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container, Header, Title, Content, Text, Button, Icon } from 'native-base';
import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';

import theme from '../../themes/base-theme';

class BlankPage extends Component {

    popRoute() {
        this.props.popRoute();
    }

    render() {
        return (
            <Container theme={theme} style={{backgroundColor: '#565051'}}>
                <Header style={{backgroundColor: '#322A2A'}} foregroundColor="#fff">
                    <Button transparent onPress={() => this.popRoute()}>
                        <Icon name="ios-arrow-back" />
                    </Button>
                    
                    <Title>Blank Page</Title>
                    
                    <Button transparent onPress={this.props.openDrawer}>
                        <Icon name="ios-menu" />
                    </Button>
                </Header>

                <Content padder>
                    <Text>
                        Create Something Awesome . . .
                    </Text>
                </Content>
            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: ()=>dispatch(openDrawer()),
        popRoute: () => dispatch(popRoute())
    }
}

export default connect(null, bindAction)(BlankPage);
