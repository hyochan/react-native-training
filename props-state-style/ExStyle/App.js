/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box1}/>
        <View style={styles.box2}/>
        <View style={styles.box3}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    flexDirection: 'row', // row, column, row-reverse, column-reverse
    // primary axis
    justifyContent: 'flex-start', // flex-start, flex-end, center, space-between, space-around, space-evenly
    // secondary axis
    alignItems: 'baseline', // flex-start, flex-end, center, stretch, baseline
    backgroundColor: '#F5FCFF',
    backgroundColor: 'yellow',

    flexWrap: 'nowrap', // wrap, nowrap, wrap-reverse
  },
  box1: {
    height: 80,
    
    flexBasis: 200,
    // flexGrow: 1,
    flexShrink: 1,
    backgroundColor: 'red',
  },
  box2: {
    height: 60,

    flexBasis: 200,
    // flexGrow: 1,
    flexShrink: 1,
    backgroundColor: 'blue',
  },
  box3: {
    height: 50,

    flexBasis: 100,
    flexShrink: 1,
    backgroundColor: 'green',
  },
});
