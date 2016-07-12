'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';

import {pushNewRoute, replaceRoute} from '../../actions/route';

import { View } from 'native-base';


class Index extends Component {

    render() {
        return (
            <View />
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
