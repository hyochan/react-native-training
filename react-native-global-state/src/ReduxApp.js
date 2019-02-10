import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import reducers from '../reducers';
import { setText } from '../actions';

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

class View1 extends Component {
  render() {
    return (
      <View style={styles.wrapper1}>
        <Text style={styles.text1}>View 1</Text>
        <TextInput
          style={styles.input}
          value={this.props.inputText}
          onChangeText={(text) => {
            this.props.onUpdateText(text);
          }}
        />
      </View>
    );
  }
}

const mapState1 = (state) => ({
  inputText: state.inputText,
});

const mapDispatch1 = (dispatch) => ({
  onUpdateText: (text) => dispatch(setText(text)),
});

const Screen1 = connect(mapState1, mapDispatch1)(View1);

class View2 extends Component {
  render() {
    return (
      <View style={styles.wrapper2}>
        <Text style={styles.text2}>View 2</Text>
        <TextInput
          style={styles.input}
          value={this.props.inputText}
          onChangeText={(text) => {
            store.dispatch(setText(text));
          }}
        />
      </View>
    );
  }
}

const mapState2 = (state) => ({
  inputText: state.inputText,
});

const Screen2 = connect(mapState2)(View2);

const store = createStore(
  combineReducers({
    ...reducers,
  }),
);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Screen1/>
          <Screen2/>
        </View>
      </Provider>
    );
  }
}
