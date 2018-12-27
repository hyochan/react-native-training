// @flow
import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
  Alert,
  TouchableHighlight,
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
    title: 'TouchableHighlight',
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          underlayColor='#ccc'
          onPress={() => Alert.alert('Pressed!!')}
        >
          <Text style={{
            fontSize: 16,
          }}>This is Hightlight.</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default Screen;
