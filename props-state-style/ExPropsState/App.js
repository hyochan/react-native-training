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
  // state = {
  //   cnt: 0,
  //   text: 'Text',
  // };

  constructor(props) {
    super(props);
    this.state = {
      cnt: 0,
      text: 'Text',
      propState: props.text,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to dooboolab's lecture</Text>
        <Text>Props: {this.state.propState}</Text>
        <Text style={{
          fontSize: 30,
          color: 'blue',
        }}>Hello this is {this.state.text}.</Text>
        <TouchableOpacity
          onPress={() => {
            this.setState({
              text: 'Changed: ' + this.state.cnt++,
              propState: 'new text',
            });
          }}
        >
          <Text style={{
            fontSize: 20,
            color: 'red',
          }}>Change above text when onPressed!</Text>
        </TouchableOpacity>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
