// @flow
import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
} from 'react-native';

import { ratio, colors } from '../../utils/Styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

type Props = {

};
type State = {

}

class Screen extends Component<Props, State> {
  static navigationOptions = {
    title: 'View',
  };

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            marginTop: 10,
          }}
        >
          <Text>View1</Text>
        </View>
        <View
          style={{
            marginTop: 10,
          }}
        >
          <Text>View2</Text>
        </View>
        <View
          style={{
            marginTop: 10,
          }}
        >
          <Text>View3</Text>
        </View>
        <View
          style={{
            marginTop: 10,
          }}
        >
          <Text>View4</Text>
        </View>
        <View
          style={{
            marginTop: 10,
          }}
        >
          <Text>View5</Text>
        </View>
        <View
          style={{
            marginTop: 10,
          }}
        >
          <Text>View6</Text>
        </View>
      </View>
    );
  }
}

export default Screen;
