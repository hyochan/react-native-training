// @flow
import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';

import { ratio, colors } from '../../utils/Styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

type Props = {

};
type State = {

}

class Screen extends Component<Props, State> {
  static navigationOptions = {
    title: 'ActivityIndicator',
  };

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            marginTop: 40,
            justifyContent: 'center',
          }}
        >
          <ActivityIndicator
            size="large" color="#0000ff"
          />
        </View>
        <View
          style={{
            marginTop: 40,
            justifyContent: 'center',
          }}
        >
          <ActivityIndicator
            size="small"
            color="black"
          />
        </View>
        <View
          style={{
            marginTop: 40,
            justifyContent: 'center',
          }}
        >
          <ActivityIndicator
            animating={false}
            size="large"
            color="black"
            hidesWhenStopped={false}
          />
        </View>
        {/* <View
          style={{
            marginTop: 40,
            justifyContent: 'center',
          }}
        >
          <ActivityIndicator
            size={'40'}
            color='#3d3d3d'
          />
        </View> */}
      </View>
    );
  }
}

export default Screen;
