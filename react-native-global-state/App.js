/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';
import ReduxApp from './src/ReduxApp';
import MobxApp from './src/MobxApp';
import ContextApiApp from './src/ContextApiApp';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={{ flex: 1}}>
        {/* <ReduxApp/> */}
        {/* <MobxApp/> */}
        <ContextApiApp/>
      </View>
    );
  }
}
