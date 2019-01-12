import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import AuthStackNavigator from './AuthStackNavigator';
import MainStackNavigator from './MainStackNavigator';
import Loading from '../screen/Loading';
import LifeCycle from '../screen/LifeCycle';

export const SwitchNavigator = createSwitchNavigator(
  {
    Loading,
    LifeCycle,
    AuthStackNavigator,
    MainStackNavigator,
  },
  {
    initialRouteName: 'Loading',
  }
);
export const AppContainer = createAppContainer(SwitchNavigator);
