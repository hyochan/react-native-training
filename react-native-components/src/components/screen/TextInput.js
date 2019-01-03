// @flow
import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
  TextInput,
  Platform,
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
  text: string;
}

class Screen extends Component<Props, State> {
  static navigationOptions = {
    title: 'TextInput',
  };

  txt = '';

  state = {
    text: '',
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{
            backgroundColor: 'white',
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            minWidth: 100,
            paddingHorizontal: 5,
          }}
          onChangeText={(text) => {
            if (Platform.OS === 'ios') {
              this.txt = text;
              return;
            }
            this.setState({
              text,
            });
          }}
          value={
            Platform.select({
              ios: this.text,
              android: this.state.text,
            })
          }
          defaultValue='default'
        />
      </View>
    );
  }
}

export default Screen;
