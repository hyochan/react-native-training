import { createStackNavigator } from 'react-navigation';

import Login from '../screen/Login';
import Signup from '../screen/Signup';
import { colors } from '../../utils/Styles';


const StackNavigator = createStackNavigator(
  {
    Login: { screen: Login },
    Signup: { screen: Signup },
  },
  {
    initialRouteName: 'Login',
  },
);

export default StackNavigator;
