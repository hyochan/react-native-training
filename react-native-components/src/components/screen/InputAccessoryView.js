// @flow
import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  InputAccessoryView,
  Image,
  Text,
  TextInput,
  Button,
  ScrollView,
  View,
} from 'react-native';

import { ratio, colors } from '../../utils/Styles';

/**
 * ios only
 */

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
    title: 'InputAccessoryView',
  };

  state = {
    text: 'Placeholder Text',
  }

  render() {
    const inputAccessoryViewID = 'uniqueID';
    return (
      <View>
        <ScrollView keyboardDismissMode='interactive'>
          <TextInput
            style={{
              padding: 10,
              paddingTop: 50,
            }}
            inputAccessoryViewID={inputAccessoryViewID}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
        </ScrollView>
        <InputAccessoryView nativeID={inputAccessoryViewID}>
          <View
            style={{
              padding: 10,
              width: '100%',
              backgroundColor: 'yellow',
            }}
          >
            <Text>This is what is inside InputAccessoryView</Text>
          </View>
        </InputAccessoryView>
      </View>
    );
  }
}

export default Screen;
