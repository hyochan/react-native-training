/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {
  NativeModules,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  NativeEventEmitter,
  DeviceEventEmitter,
  Platform,
} from 'react-native';

import MyButton from './MyButtonNativeView';

const { Console: RNConsole } = NativeModules;
const emitter = new NativeEventEmitter(RNConsole);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

type Props = {

};

type State = {
  text: string;
};

export default class App extends Component<Props, State> {
  state = {
    text: '',
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            paddingHorizontal: 8,
            minWidth: 100,
          }}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Button title='press me!' onPress={async () => {
          try {
            const result = await RNConsole.writeTextWithPromise(this.state.text);
            Alert.alert(
              'promise resolve',
              `result: ${result}`,
            );
          } catch (err) {
            Alert.alert(
              'promise reject',
              `err: ${err}`,
            );
          }
          // RNConsole.writeText(this.state.text, (err, result) => {
          //   Alert.alert(
          //     'callback',
          //     `err: ${err}\nresult: ${result}`,
          //   );
          // });
        }}/>
        <Button title='runTimer' onPress={()=>{
          RNConsole.runTimer();
          if (Platform.OS === 'android') {
            const subscription = DeviceEventEmitter.addListener('my_event', (evt) => {
              console.log('event', evt);
            });
          } else {
            const subscription = emitter.addListener(
              'my_event',
              (evt) => console.log('event', evt)
            );
          }
        }}/>
        {/* <MyButton
          onMyClick={(evt) => {
            console.log('onMyClick', evt.nativeEvent);
          }}
          style={{
            width: 300,
            height: 150,
            backgroundColor: 'red',
          }}
        /> */}
      </View>
    );
  }
}
