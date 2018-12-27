// @flow
import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
  FlatList,
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
    title: 'FlatList',
  };

  state = {
    data: [
      {},
      {},
      {},
      {},
      {},
      {},
      {},
    ],
  };

  renderItem = () => {
    return (
      <View
        style={{
          width: 50,
          height: 50,
          marginVertical: 5,
          marginHorizontal: 5,
          backgroundColor: 'blue',
        }}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={{
            alignSelf: 'stretch',
          }}
          keyExtractor={(item, index) => index.toString()}
          data={this.state.data}
          renderItem={this.renderItem}
          ListHeaderComponent={<View style={{ height: 16 * ratio }}/>}
        />
      </View>
    );
  }
}

export default Screen;
