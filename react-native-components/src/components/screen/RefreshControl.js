// @flow
import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
  ScrollView,
  RefreshControl,
} from 'react-native';

import { ratio, colors } from '../../utils/Styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
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
    title: 'RefreshControl',
  };

  timeout;

  state = {
    refreshing: false,
  };

  _onRefresh = () => {
    this.setState({refreshing: true});
    this.timeout = setTimeout(() => {
      this.setState({refreshing: false});
    }, 3000);
  }

  componentWillUnmount = () => {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          style={{
            alignSelf: 'stretch',
          }}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
        >
          <Text>text</Text>
          <Text>text</Text>
          <Text>text</Text>
          <Text>text</Text>
          <Text>text</Text>
          <Text>text</Text>
          <Text>text</Text>
          <Text>text</Text>
          <Text>text</Text>
          <Text>text</Text>
          <Text>text</Text>
          <Text>text</Text>
          <Text>text</Text>
          <Text>text</Text>
          <Text>text</Text>
          <Text>text</Text>
          <Text>text</Text>
          <Text>text</Text>
          <Text>text</Text>
          <Text>text</Text>
          <Text>text</Text>
          <Text>text</Text>
          <Text>text</Text>
          <Text>text</Text>
          <Text>text</Text>
        </ScrollView>
      </View>
    );
  }
}

export default Screen;
