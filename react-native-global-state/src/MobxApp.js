import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { inject } from 'mobx-react/native';
import { observer } from 'mobx-react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';

import appStore from '../stores/appStore';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  wrapper1: {
    padding: 8,
    backgroundColor: '#e3e3e3',
    width: '100%',
    height: 240,
  },
  text1: {
    color: '#333',
    fontSize: 18,
  },
  input: {
    margin: 20,
    backgroundColor: 'white',
    fontSize: 20,
    padding: 8,
  },
  wrapper2: {
    padding: 8,
    marginTop: 30,
    backgroundColor: '#3d3d3d',
    width: '100%',
    height: 240,
  },
  text2: {
    color: 'white',
    fontSize: 18,
  },
});

@inject('store') @observer
class View1 extends Component {
  render() {
    return (
      <View style={styles.wrapper1}>
        <Text style={styles.text1}>View 1</Text>
        <TextInput
          style={styles.input}
          value={this.props.store.text}
          onChangeText={(text) => {
            this.props.store.text = text;
          }}
        />
      </View>
    );
  }
}

@inject('store') @observer
class View2 extends Component {
  render() {
    return (
      <View style={styles.wrapper2}>
        <Text style={styles.text2}>View 2</Text>
        <TextInput
          style={styles.input}
          value={this.props.store.text}
          onChangeText={(text) => {
            this.props.store.text = text;
          }}
        />
      </View>
    );
  }
}


class App extends Component<Props> {
  render() {
    return (
      <Provider store={appStore}>
        <View style={styles.container}>
          <View1/>
          <View2/>
        </View>
      </Provider>
    );
  }
}

export default App;
