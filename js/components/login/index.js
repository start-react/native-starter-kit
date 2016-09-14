
'use strict';

import React, { Component } from 'react';
import { DeviceEventEmitter, Dimensions, Image } from 'react-native';
import { connect } from 'react-redux';

import { replaceRoute } from '../../actions/route';
import { setUser } from '../../actions/user';

import { Container, Content, InputGroup, Input, Button, Icon, View } from 'native-base';

import myTheme from '../../themes/base-theme';
import styles from './styles';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visibleHeight: Dimensions.get('window').height,
            scroll: false,
            name: ''
        };
    }

    replaceRoute(route) {
        this.setUser(this.state.name);
        this.props.replaceRoute(route);
    }

    setUser(name) {
        this.props.setUser(name);
    }

    render() {

        return (
            <Container theme={myTheme}>
                <View style={styles.container}>
                    <Content>
                        <Image source={require('../../../images/shadow.png')} style={styles.shadow}>
                            <View style={styles.bg}>
                                <InputGroup style={styles.input}>
                                    <Icon name='ios-person' />
                                    <Input placeholder='EMAIL' onChangeText={(name) => this.setState({name})} />
                                </InputGroup>
                                <InputGroup style={styles.input}>
                                    <Icon name='ios-unlock-outline' />
                                    <Input
                                        placeholder='PASSWORD'
                                        secureTextEntry={true}
                                    />
                                </InputGroup>
                                <Button style={styles.btn} textStyle={{color: '#fff'}} onPress={() => this.replaceRoute('home') }>
                                    Login
                                </Button>
                            </View>
                        </Image>
                    </Content>
                </View>
            </Container>
        )
    }
}

function bindActions(dispatch){
    return {
        replaceRoute:(route)=>dispatch(replaceRoute(route)),
        setUser:(name)=>dispatch(setUser(name))
    }
}

export default connect(null, bindActions)(Login);
