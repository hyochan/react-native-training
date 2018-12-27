// @flow
import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
  Slider,
  Alert,
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
    title: 'Slider',
  };

  render() {
    return (
      <View style={styles.container}>
        <Slider
          style={{ width: 300 }}
          step={1}
          minimumValue={18}
          maximumValue={71}
          value={3}
          onValueChange={(val) => this.setState({ age: val })}
          onSlidingComplete={(val) => Alert.alert('sliding completed.')}
        />
      </View>
    );
  }
}

export default Screen;
