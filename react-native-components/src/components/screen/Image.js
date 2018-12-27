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
    justifyContent: 'center',
    alignItems: 'center',
  },
});

type Props = {

};
type State = {

}

class Screen extends Component<Props, State> {
  static navigationOptions = {
    title: 'Image',
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../../assets/icons/mask.png')}
        />
        <Image
          style={{ marginTop: 10 }}
          source={require('../../../assets/icons/mask.png')}
        />
        <Image
          style={{ marginTop: 10 }}
          source={require('../../../assets/icons/mask.png')}
        />
      </View>
    );
  }
}

export default Screen;
