
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';

import { Container, Header, Title, Content, Text, Button, Icon } from 'native-base';

import myTheme from '../../themes/base-theme';

class BlankPage extends Component {

    popRoute() {
        this.props.popRoute();
    }

    render() {

        const { props: { name, index, list } } = this;

        return (
            <Container theme={myTheme} style={{backgroundColor: '#565051'}}>
                <Header>
                    <Button transparent onPress={() => this.popRoute()}>
                        <Icon name='ios-arrow-back' />
                    </Button>

                    <Title>{(name) ? name : 'Blank Page'}</Title>

                    <Button transparent onPress={this.props.openDrawer}>
                        <Icon name='ios-menu' />
                    </Button>
                </Header>

                <Content padder>
                    <Text>
                        { (!isNaN(index)) ? list[index] : 'Create Something Awesome . . .'}
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

function mapStateToProps(state) {
    return {
        name: state.user.name,
        index: state.list.selectedIndex,
        list: state.list.list
    };
}

export default connect(mapStateToProps, bindAction)(BlankPage);
