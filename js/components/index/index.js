'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';

import {pushNewRoute, replaceRoute} from '../../actions/route';

import { Container, Content, Text } from 'native-base';

import myTheme from '../../themes/base-theme';


class Index extends Component {

    render() {
        return (
            <Container theme={myTheme}>
            	<Content>
            		<Text style={{marginTop: 180, marginLeft: 22, fontSize: 22, fontWeight: 'bold'}}>
            			React Native - NativeBase Seed
            		</Text>
            	</Content>
            </Container>
        )
    }
}


function bindActions(dispatch){
    return {
        replaceRoute:(route)=>dispatch(replaceRoute(route)),
        pushNewRoute:(route)=>dispatch(pushNewRoute(route))
    }
}

export default connect(null, bindActions)(Index);
