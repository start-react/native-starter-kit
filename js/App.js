'use strict';

import React,{ Component } from 'react';
import { StyleSheet, AppState, Dimensions, Image } from 'react-native';
import CodePush from 'react-native-code-push';

import { Container, Content, Text, View } from 'native-base';
import Modal from 'react-native-modalbox';

import AppNavigator from './AppNavigator';
import ProgressBar from './components/loaders/ProgressBar';

import theme from './themes/base-theme';

var height = Dimensions.get('window').height;
let styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
    },
    box: {
        padding: 10,
        backgroundColor: 'transparent',
        flex: 1,
        height: height-70
    },
    space: {
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'center'
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal1: {
        height: 300

    },
    modal2: {
        height: height-78,
        position: 'relative',
        justifyContent: 'center',
    },
});

class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            showDownloadingModal: false,
            showInstalling: false,
            downloadProgress: 0
        }
    }

    componentDidMount() {

        CodePush.sync({ updateDialog: true, installMode: CodePush.InstallMode.IMMEDIATE },
            (status) => {
                switch (status) {
                    case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
                        this.setState({showDownloadingModal: true});
                        this.refs.modal.open();
                        break;
                    case CodePush.SyncStatus.INSTALLING_UPDATE:
                        this.setState({showInstalling: true});
                        break;
                    case CodePush.SyncStatus.UPDATE_INSTALLED:
                        this.refs.modal.close();
                        this.setState({showDownloadingModal: false});
                        break;
                }
            },
            ({ receivedBytes, totalBytes, }) => {
                this.setState({downloadProgress: receivedBytes / totalBytes * 100});
            }
        );
    }

    render() {
        if(this.state.showDownloadingModal)
            return (
                <Container theme={theme} style={{backgroundColor: theme.defaultBackgroundColor}}>
                    <Content style={styles.container}>
                        <Modal style={[styles.modal, styles.modal1]} backdrop={false} ref={'modal'} swipeToClose={false} >

                            <View style={{flex:1, alignSelf: 'stretch', justifyContent: 'center', padding:20}}>
                                {this.state.showInstalling ?
                                    <Text style={{color: theme.brandPrimary, textAlign: 'center',marginBottom: 15, fontSize: 15 }}>
                                        Installing update...
                                    </Text> :
                                    <View style={{flex:1, alignSelf: 'stretch', justifyContent: 'center', padding:20}}>
                                        <Text style={{color: theme.brandPrimary, textAlign: 'center',marginBottom: 15, fontSize: 15 }}>Downloading update... {parseInt(this.state.downloadProgress) + ' %'}</Text>
                                        <ProgressBar color='theme.brandPrimary' progress={parseInt(this.state.downloadProgress)} />
                                    </View>
                                }
                            </View>

                        </Modal>
                    </Content>
                </Container>

            );
        else
            return(
                <AppNavigator store={this.props.store} />
            );
    }
}

export default App
