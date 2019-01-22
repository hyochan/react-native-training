/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  LayoutAnimation,
  NativeModules,
} from 'react-native';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

type Props = {};
export default class App extends Component<Props> {
  state ={
    show: true,
    width: 50,
    height: 50,
    data: [
      {},
      {},
      {},
      {},
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          style={{
            alignSelf: 'stretch',
          }}
          keyExtractor={(item, index) => index.toString()}
          data={this.state.data}
          renderItem={this.renderItem}
        />
        {this.renderInputs()}
      </View>
    );
  }

  renderItem = () => {
    return (
      <View style={{
        width: this.state.width,
        height: this.state.height,
        marginVertical: 5,
        marginHorizontal: 5,
        backgroundColor: 'blue',
      }}/>
    )
  }

  renderInputs() {
    return <View style={{ marginBottom: 40 }}>
      <Button title='Update Me!!' onPress={() => {
        // LayoutAnimation.spring();
        LayoutAnimation.configureNext({
          duration: 700,
          update: {
            type: 'spring',
            springDamping: 0.4,
            property: 'scaleXY',
          },
        });
        this.setState({
          width: this.state.width + 10,
          height: this.state.height + 10,
        })
      }}/>
      <Button title='show / hide'
        onPress={() => {
          LayoutAnimation.configureNext({
            duration: 700,
            create: {
              type: 'linear',
              property: 'opacity',
            },
            update: {
              type: 'spring',
              springDamping: 0.4,
              property: 'scaleXY',
            },
            delete: {
              type: 'linear',
              property: 'opacity',
            },
          });
          this.setState({
            data: this.state.data.length !== 4 ? [{}, {}, {}, {}] : [{}, {}],
          });
        }}
      />
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
