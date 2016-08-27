'use strict';

import AppNavigator from './AppNavigator';
import React,{Component} from 'react';
// import CodePush from 'react-native-code-push';
import {StyleSheet} from 'react-native';
import Modal from 'react-native-modalbox';
import {Container, Content, Text, View} from 'native-base';
import theme from './themes/base-theme';
import ProgressBar from './components/loaders/ProgressBar';

let styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal1: {
    height: 300

  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDownloadingModal: false,
      showInstalling: false,
      downloadProgress: 0
    };
  }

  componentDidMount() {
        /* Uncomment this code for testing the update modal */
        // this.setState({showDownloadingModal: true});
        //this.setState({showInstalling: true});
        // this.refs.modal.open();
        // var intervalId = setInterval(() => {
        //     if(this.state.downloadProgress == 99) {
        //         clearInterval(intervalId);
        //         this.setState({showDownloadingModal: false});
        //     }
        //     this.setState({downloadProgress: this.state.downloadProgress + 1});
        // }, 30);

        // Prompt the user when an update is available
        // and then display a "downloading" modal

        // CodePush.sync({ updateDialog: true, installMode: CodePush.InstallMode.IMMEDIATE },
        //   (status) => {
        //       switch (status) {
        //           case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
        //               this.setState({showDownloadingModal: true});
        //               this.refs.modal.open();
        //               break;
        //           case CodePush.SyncStatus.INSTALLING_UPDATE:
        //               this.setState({showInstalling: true});
        //               break;
        //           case CodePush.SyncStatus.UPDATE_INSTALLED:
        //               this.refs.modal.close();
        //               this.setState({showDownloadingModal: false});
        //               break;
        //       }
        //   },
        //   ({ receivedBytes, totalBytes, }) => {
        //     this.setState({downloadProgress: receivedBytes / totalBytes * 100});
        //   }
        // );
  }

  render() {
    if (this.state.showDownloadingModal) {
      return (
                <Container theme={theme} style={{backgroundColor: theme.defaultBackgroundColor}}>
                    <Content style={styles.container}>
                        <Modal style={[styles.modal, styles.modal1]} backdrop={false} ref={"modal"} swipeToClose={false} >

                            <View style={{flex: 1, alignSelf: 'stretch', justifyContent: 'center', padding: 20}}>
                                {this.state.showInstalling ?
                                    <Text style={{color: theme.brandPrimary, textAlign: 'center',marginBottom: 15, fontSize: 15}}>
                                        Installing update...
                                    </Text> :
                                    <View style={{flex: 1, alignSelf: 'stretch', justifyContent: 'center', padding: 20}}>
                                        <Text
                                            style={{color: theme.brandPrimary,
                                                  textAlign: 'center',marginBottom: 15,
                                                  fontSize: 15}}
                                        >
                                                  Downloading update... {parseInt(this.state.downloadProgress, 10) + ' %'}
                                        </Text>
                                        <ProgressBar color="theme.brandPrimary" progress={parseInt(this.state.downloadProgress, 10)} />
                                    </View>
                                }
                            </View>

                        </Modal>
                    </Content>
                </Container>

            );
    } else {
      return (
                <AppNavigator />
            );
    }
  }
}

export default App;
