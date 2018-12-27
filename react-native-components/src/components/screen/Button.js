// @flow
import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
  Button,
  Alert,
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
    title: 'Button',
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => {
            Alert.alert('Pressed!!');
          }}
          title='Button'
          color='#841584'
          accessibilityLabel='You can click this one to show alert press.'
        />
      </View>
    );
  }
}

export default Screen;
