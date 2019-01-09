/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { AppNavigator, AppContainer } from './src/components/navigation/SwitchNavigator';
import Login from './src/components/screen/Login';
import Signup from './src/components/screen/Signup';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <AppContainer />
    );
  }
}
