import { createStackNavigator } from 'react-navigation';

import Search from '../screen/Search';
import MainTabNavigator, { MainTabNavigationOptions } from '../navigation/MainTabNavigator';


export default createStackNavigator(
  {
    MainTabNavigator: {
      screen: MainTabNavigator,
      navigationOptions: MainTabNavigationOptions,
    },
    Search,
  },
);
