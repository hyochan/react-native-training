// @flow
import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
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
    title: 'TouchableWithoutFeedback',
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback
          underlayColor='#ccc'
          onPress={() => Alert.alert('Pressed!!')}
        >
          <View style={{
            width: 40,
            height: 40,
            backgroundColor: 'yellow',
          }}/>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default Screen;
