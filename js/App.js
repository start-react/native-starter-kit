
'use strict';

import AppNavigator from './AppNavigator';
import React,{ Component } from "react";
import CodePush from 'react-native-code-push';
import { StyleSheet, Text, View, AppState} from 'react-native';

class App extends Component {
    componentDidMount() {
        AppState.addEventListener('change', this.handleAppStateChange);
    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this.handleAppStateChange);
    }

    handleAppStateChange(state:string) {
        if (state === 'active') {
            CodePush.sync({installMode: CodePush.InstallMode.IMMEDIATE});
        }
    }
    render() {
        return (
            <AppNavigator store={this.props.store} />
        );
    }
}

export default App
