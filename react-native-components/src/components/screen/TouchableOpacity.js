// @flow
import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
  Alert,
} from 'react-native';

import { ratio, colors } from '../../utils/Styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
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
    title: 'TouchableOpacity',
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          underlayColor='#ccc'
          onPress={() => Alert.alert('Pressed!!')}
        >
          <Text style={{
            fontSize: 16,
          }}>This is Opacity.</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Screen;
