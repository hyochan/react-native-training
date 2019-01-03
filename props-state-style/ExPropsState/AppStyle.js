/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform, StyleSheet, Text, View, TouchableOpacity
} from 'react-native';
import { blue, red } from 'ansi-colors';

type Props = {};
type State = {};

export default class App extends Component<Props, State> {
  static defaultProps = {
    text: 'hello',
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
