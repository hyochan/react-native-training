// @flow
import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
  Modal,
} from 'react-native';

import { ratio, colors } from '../../utils/Styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
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
    title: 'Modal',
  };

  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide" // slide, fade, none
          transparent={false}
          // hardwareAccelerated // for android
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={styles.container}>
            <View>
              <TouchableOpacity
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text style={{
                  fontSize: 18,
                }}>Hide Modal</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <TouchableOpacity
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text style={{
            fontSize: 18,
          }}>Show Modal!!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Screen;
