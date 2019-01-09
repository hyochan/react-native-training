import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import AuthStackNavigator from './AuthStackNavigator';
import MainStackNavigator from './MainStackNavigator';
import Loading from '../screen/Loading';

export const SwitchNavigator = createSwitchNavigator(
  {
    Loading,
    AuthStackNavigator,
    MainStackNavigator,
  },
  {
    initialRouteName: 'Loading',
  }
);
export const AppContainer = createAppContainer(SwitchNavigator);
