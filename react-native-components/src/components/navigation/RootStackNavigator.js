import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { observer } from 'mobx-react/native';

import { colors } from '../../utils/Styles';
import appStore from '../../stores/appStore';
import Intro from '../screen/Intro';

// Button
import Button from '../screen/Button';

// Keyboard
import InputAccessoryView from '../screen/InputAccessoryView';
import KeyboardAvoidingView from '../screen/KeyboardAvoidingView';

// List
import ScrollView from '../screen/ScrollView';
import FlatList from '../screen/FlatList';
import SectionList from '../screen/SectionList';

// View
import ActivityIndicator from '../screen/ActivityIndicator';
import View from '../screen/View';
import Text from '../screen/Text';
import Picker from '../screen/Picker';
import Image from '../screen/Image';
import Modal from '../screen/Modal';
import SafeAreaView from '../screen/SafeAreaView';
import StatusBar from '../screen/StatusBar';

// Input
import TextInput from '../screen/TextInput';
import RefreshControl from '../screen/RefreshControl';
import Slider from '../screen/Slider';
import Switch from '../screen/Switch';

// Touch
import TouchableHighlight from '../screen/TouchableHighlight';
import TouchableNativeFeedBack from '../screen/TouchableNativeFeedBack';
import TouchableOpacity from '../screen/TouchableOpacity';
import TouchableWithoutFeedBack from '../screen/TouchableWithoutFeedBack';

const routeConfig = {
  Intro: {
    screen: Intro,
    navigationOptions: {
      title: 'React Native Components',
    },
  },
  Button,
  InputAccessoryView,
  KeyboardAvoidingView,
  ScrollView,
  FlatList,
  SectionList,
  ActivityIndicator,
  View,
  Text,
  Picker,
  Image,
  Modal,
  SafeAreaView,
  StatusBar,
  TextInput,
  RefreshControl,
  Slider,
  Switch,
  TouchableHighlight,
  TouchableNativeFeedBack,
  TouchableOpacity,
  TouchableWithoutFeedBack,
};

const navigatorConfig = {
  initialRouteName: 'Intro',
  gesturesEnabled: true,
  statusBarStyle: 'light-content',
};

const RootStackNavigator = createStackNavigator(routeConfig, navigatorConfig);

@observer
class RootNavigator extends React.Component {
  static router = RootStackNavigator.router;

  render() {
    return (
      <RootStackNavigator
        navigation={this.props.navigation}
      />
    );
  }
}

export default RootNavigator;
