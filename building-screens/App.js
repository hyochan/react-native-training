import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export const colors = {
  background: '#e3e3e3',
  dodgerBlue: 'rgb(58,139,255)',
  dusk: 'rgb(65,77,107)',
  cloudyBlue: 'rgb(175,194,219)',
  blueyGray: 'rgb(134,154,183)',
  paleGray: 'rgb(233,237,244)',
};

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
    flex: 1,
    flexDirection: 'row', // row, column, row-reverse, column-reverse
    // primary axis
    justifyContent: 'flex-start', // flex-start, flex-end, center, space-between, space-around, space-evenly
    // secondary axis
    alignItems: 'baseline', // flex-start, flex-end, center, stretch, baseline

    flexWrap: 'nowrap', // wrap, nowrap, wrap-reverse
  },
});
