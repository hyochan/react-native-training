// @flow
import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';

import { colors } from '../../utils/Styles';
import NativeButton from 'apsl-react-native-button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.fefefe,
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  txtInput: {
    alignSelf: 'stretch', // android fix
    margin: 20,
    minHeight: 88,
    padding: 12,
    fontSize: 14,
  },
  byteTxt: {
    alignSelf: 'flex-end',
    color: '#696969',
    marginRight: 24,
  },
  btnNext: {
    marginBottom: 0,
    height: 56,
    backgroundColor: colors.dodgerBlue,
    borderWidth: 0,
    borderRadius: 0,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '100%',
  },
  txtNext: {
    fontSize: 14,
    color: 'white',
  },
  btnNextDisabled: {
    backgroundColor: 'rgb(243,243,243)',
  },
  txtNextDisabled: {
    fontSize: 14,
    opacity: 0.4,
    color: 'black',
  },
});

type Props = {

};
type State = {

}

const getByteLengthStr = (str) => {
  const m = encodeURIComponent(str).match(/%[89ABab]/g);
  return str.length + (m ? m.length : 0);
};

class Screen extends Component<Props, State> {
  static navigationOptions = {
    title: 'KeyboardAvoidingView',
  };

  state = {
    input: '',
    byteLength: 0,
  };

  onTextChanged = (text: string) => {
    const byteLength = getByteLengthStr(text);
    if (byteLength > 300) {
      return;
    }
    this.setState({
      input: text.replace(/(\r\n|\n|\r)/gm, ''),
      byteLength,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView
          style={ styles.content }
          behavior='padding'
          enabled
          keyboardVerticalOffset={84}
        >
          <ScrollView style={{ alignSelf: 'stretch' }}>
            <TextInput
              style={[
                styles.txtInput,
                {
                  fontSize: this.state.input ? 18 : 14,
                },
              ]}
              underlineColorAndroid='transparent' // android fix
              autoCapitalize='none'
              autoCorrect={false}
              multiline={true}
              placeholderTextColor='rgb(155,155,155)'
              onChangeText={(text) => this.onTextChanged(text)}
              placeholder={ 'Hi! I am a placeholder!! '}
              value={this.state.input}
            />
            <Text style={styles.byteTxt}>
              {this.state.byteLength} / 300
            </Text>
          </ScrollView>
          <NativeButton
            onPress={() => Alert.alert('Pressed')}
            isDisabled={!this.state.input}
            activeOpacity={0.75}
            style={ styles.btnNext }
            textStyle={
              this.state.input
                ? styles.txtNext
                : styles.txtNextDisabled
            }
            disabledStyle={styles.btnNextDisabled}
          >Next</NativeButton>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export default Screen;
