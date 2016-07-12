/**
 * Created by kylefang on 4/27/16.
 * @flow
 */

'use strict';

import React, {Component} from 'React';
import App from './App';
import configureStore from './configureStore'
import {Provider} from 'react-redux';
import {StyleSheet, View, Text} from 'react-native';

function setup():React.Component {

    class Root extends Component {

        constructor() {
            super();
            this.state = {
                isLoading: false,
                store: configureStore(()=> this.setState({isLoading: false})),
            };
        }

        render() {
            return (
                <Provider store={this.state.store}>
                    <App store={this.state.store} />
                </Provider>
            );
        }
    }
    return Root
}

export default setup;
