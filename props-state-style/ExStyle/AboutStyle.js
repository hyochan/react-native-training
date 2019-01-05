/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.view}/>
        <Text style={styles.text}>Hello</Text>
        <Image style={styles.img} source={require('./assets/mask.png')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', // row, column, row-reverse, column-reverse
    justifyContent: 'center', // flex-start, flex-end, center, space-between, space-around, space-evenly
    alignItems: 'center', // flex-start, flex-end, center, stretch, baseline
    backgroundColor: '#F5FCFF',
    backgroundColor: 'yellow',

    flexWrap: 'nowrap', // wrap, nowrap, wrap-reverse
  },
  view: {
    // opacity: 0.5,
    backgroundColor: 'rgba(255,0,0,0.5)',
    height: 200,
    width: 200,
    borderBottomColor: 'green',
    borderWidth: 3,
    // backgroundColor: 'red',
  },
  text: {
    height: 200,
    width: 200,
    backgroundColor: 'blue',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontWeight: '800',
  },
  img: {
    height: 200,
    width: 200,
    opacity: 0.5,
  }
});
