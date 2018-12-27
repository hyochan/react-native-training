// @flow
import React, { Component } from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
} from 'react-native';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { inject } from 'mobx-react/native';

import Button from '../shared/Button';
import { ratio, colors } from '../../utils/Styles';
import { IC_MASK } from '../../utils/Icons';
import User from '../../models/User';
import { getString } from '../../../STRINGS';

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    backgroundColor: colors.background,
    flexDirection: 'column',
    alignItems: 'center',
  },
  txtHeader: {
    color: colors.dusk,
    fontSize: 16,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: colors.dodgerBlue,
    alignSelf: 'center',
    borderRadius: 8,
    width: 280,
    height: 48,
    borderColor: 'white',

    alignItems: 'center',
    justifyContent: 'center',
  },
});

type Props = {
  store: User;
};
type State = {
  isLoggingIn: boolean;
}

@inject('store') @observer
class Page extends Component<Props, State> {
  timer: any;

  state = {
    isLoggingIn: false,
  };

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  renderItem(txt: string, reverseBack?: boolean) {
    return (
      <Button
        onPress={() => this.props.navigation.navigate(txt)}
        style={[
          styles.btn,
          reverseBack
            ? {
              borderWidth: 1, borderColor: colors.dodgerBlue, backgroundColor: 'white', marginBottom: 24,
            }
            : { marginBottom: 24 },
        ]}
        textStyle={{
          fontSize: 15,
          color: reverseBack ? colors.dodgerBlue : 'white',
        }}
      >{txt}</Button>
    );
  }

  render() {
    return (
      <ScrollView
        style={{
          backgroundColor: colors.background,
          height: '100%',
          width: '100%',
        }}
      >
        <View style={styles.container}>
          {/* Button */}
          {this.renderItem('Button', true)}
          {/* View */}
          <Text style={styles.txtHeader}>View</Text>
          {this.renderItem('ActivityIndicator')}
          {this.renderItem('View')}
          {this.renderItem('Text')}
          {this.renderItem('Picker')}
          {this.renderItem('Image')}
          {this.renderItem('Modal')}
          {this.renderItem('SafeAreaView')}
          {this.renderItem('StatusBar')}
          {/* Input */}
          <Text style={styles.txtHeader}>Input</Text>
          {this.renderItem('TextInput', true)}
          {this.renderItem('RefreshControl', true)}
          {this.renderItem('Slider', true)}
          {this.renderItem('Switch', true)}
          {/* Touch */}
          <Text style={styles.txtHeader}>Touch</Text>
          {this.renderItem('TouchableHighlight', true)}
          {this.renderItem('TouchableNativeFeedBack', true)}
          {this.renderItem('TouchableOpacity', true)}
          {this.renderItem('TouchableWithoutFeedBack', true)}
          {/* Keyboard */}
          <Text style={styles.txtHeader}>Keyboard</Text>
          {this.renderItem('InputAccessoryView')}
          {this.renderItem('KeyboardAvoidingView')}
          {/* List */}
          <Text style={styles.txtHeader}>List</Text>
          {this.renderItem('ScrollView', true)}
          {this.renderItem('FlatList', true)}
          {this.renderItem('SectionList', true)}
        </View>
      </ScrollView>
    );
  }
}

export default Page;
