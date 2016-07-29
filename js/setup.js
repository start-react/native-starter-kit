
'use strict';

import React, { Component } from 'React';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';

import App from './App';
import configureStore from './configureStore'

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
