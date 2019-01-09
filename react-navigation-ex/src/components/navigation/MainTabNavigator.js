import React from 'react';
import {
  Platform,
  Image,
  View,
  Text,
  AsyncStorage,
  BackHandler,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { ratio, colors } from '../../utils/Styles';
import { createMaterialTopTabNavigator } from 'react-navigation';
import Friend from '../screen/Friend';
import Message from '../screen/Message';

export const MainTabNavigationOptions = ({ navigation }) => ({
  title: 'App Title',
  headerLeft:
    <View style={{
      marginLeft: 16,
    }}>
      <TouchableOpacity
        onPress={() => {}}
      >
        <Text>Button</Text>
      </TouchableOpacity>
    </View>,
  headerRight:
    <View style={{
      marginRight: 16,
    }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Search')}
      >
        <Text>Search</Text>
      </TouchableOpacity>
    </View>,
})

const MyNavigator = createMaterialTopTabNavigator(
  {
    Friend,
    Message,
  },
  {
    navigationOptions: ({ navigation, screenProps }) => ({
      header: null,
      headerMode: 'none',
      tabBarVisible: true,
      tabBarLabel: () => {
        const { routeName } = navigation.state;
        switch (routeName) {
          //
        }
        return <Text>{routeName}</Text>;
      },
    }),
    animationEnabled: false,
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: 'rgb(12,157,197)',
      inactiveTintColor: 'black',
      indicatorStyle: {
        backgroundColor: 'rgb(102,134,205)',
      },
      labelStyle: {
        fontSize: 14 * ratio,
        color: 'tomato',
      },
      tabStyle: {
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
      },
      style: {
        backgroundColor: 'white',
      },
      statusBarStyle: 'light-content',
    },
  },
);
type Props = {};
type State = {};
class Page extends React.Component<Props, State> {
  static router = MyNavigator.router;
  render() {
    return (
      <MyNavigator
        navigation={this.props.navigation}
      />
    );
  }
}
export default Page;