// @flow
import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
  SafeAreaView,
} from 'react-native';

import { ratio, colors } from '../../utils/Styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'transparent',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

type Props = {

};
type State = {

}

/**
 * only for ios
 */

class Screen extends Component<Props, State> {
  static navigationOptions = {
    title: 'SafeAreaView',
  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={{
          flex: 1,
          backgroundColor: '#fff',
          width: '100%',
        }}>
          <View style={{
            flex: 1, backgroundColor: 'blue', width: '100%',
          }}>
            <Text>Hello World!</Text>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

export default Screen;
