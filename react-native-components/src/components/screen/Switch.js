// @flow
import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
  Switch,
} from 'react-native';

import { ratio, colors } from '../../utils/Styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
    title: 'Switch',
  };

  state = {
    val: false,
  };

  onValChange = (val) => {
    console.log('onValChange');
    this.setState({
      val,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Switch
          onValueChange={this.onValChange}
          value={this.state.val}
        />
      </View>
    );
  }
}

export default Screen;
