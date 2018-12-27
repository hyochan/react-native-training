// @flow
import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
  Alert,
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
    title: 'Text',
  };

  state = {
    titleText: "Bird's Nest",
    bodyText: 'This is not really a bird nest.'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>
          <Text onPress={() => Alert.alert('pressed')}>
            {this.state.titleText}{'\n'}{'\n'}
          </Text>
          <Text numberOfLines={5}>
            {this.state.bodyText}
          </Text>
        </Text>
        <View style={{ marginTop: 40 }}>
          <Text style={{fontWeight: 'bold'}}>
            I am bold{' '}
            <Text style={{color: 'red'}}>
              and red
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}

export default Screen;
