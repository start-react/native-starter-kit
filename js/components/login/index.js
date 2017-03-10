
import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Content, Item, Input, Button, Icon, View, Text } from 'native-base';

import { setUser } from '../../actions/user';
import styles from './styles';

const {
  replaceAt,
} = actions;

const background = require('../../../images/shadow.png');

class Login extends Component {

  static propTypes = {
    setUser: React.PropTypes.func,
    replaceAt: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  setUser(name) {
    this.props.setUser(name);
  }

  replaceRoute(route) {
    this.setUser(this.state.name);
    this.props.replaceAt('login', { key: route }, this.props.navigation.key);
  }

  render() {
    return (
      <Container>
        <View style={styles.container}>
          <Content>
            <Image source={background} style={styles.shadow}>
              <View style={styles.bg}>
                <Item style={styles.input}>
                  <Icon active name="person" />
                  <Input placeholder="EMAIL" onChangeText={name => this.setState({ name })} />
                </Item>
                <Item style={styles.input}>
                  <Icon name="unlock" />
                  <Input
                    placeholder="PASSWORD"
                    secureTextEntry
                  />
                </Item>
                <Button style={styles.btn} onPress={() => this.replaceRoute('home')}>
                  <Text>Login</Text>
                </Button>
              </View>
            </Image>
          </Content>
        </View>
      </Container>
    );
  }
}

function bindActions(dispatch) {
  return {
    replaceAt: (routeKey, route, key) => dispatch(replaceAt(routeKey, route, key)),
    setUser: name => dispatch(setUser(name)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindActions)(Login);
