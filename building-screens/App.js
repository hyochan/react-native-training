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

    flexWrap: 'nowrap', // wrap, nowrap, wrap-reverse
  },
});
