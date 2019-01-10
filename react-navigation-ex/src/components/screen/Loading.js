/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

type Props = {
  navigation: any,
};
export default class App extends Component<Props> {
  timer: any;

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.props.navigation.navigate('AuthStackNavigator');
    }, 1500);
  }

  componentWillMount() {
    if(this.timer) {
      clearTimeout(this.timer);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
