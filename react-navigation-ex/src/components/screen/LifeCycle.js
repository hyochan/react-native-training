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
  TouchableOpacity,
} from 'react-native';


class Shared extends Component<Props> {
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    console.log('nextProps', nextProps);
    console.log('prevState', prevState);
    return {
      num: nextProps.children * 2,
    };
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    console.log('nextProps', nextProps);
    console.log('nextState', nextState);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
    return prevProps;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
    console.log('snapshot', snapshot);
  }

  render() {
    return (
      <Text>{this.state.num}</Text>
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

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      cnt: 0,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Shared>{this.state.cnt}</Shared>
        <TouchableOpacity
          onPress= {() => this.onPress()}
        >
          <Text>Press Me!!</Text>
        </TouchableOpacity>
      </View>
    );
  }

  onPress = () => {
    this.setState({
      cnt: this.state.cnt + 1,
    });
  }
};
