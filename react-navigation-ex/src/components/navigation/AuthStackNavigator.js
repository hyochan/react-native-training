import { createStackNavigator } from 'react-navigation';

import Login from '../screen/Login';
import Signup from '../screen/Signup';
import FindPw from '../screen/FindPw';
import { colors } from '../../utils/Styles';


const StackNavigator = createStackNavigator(
  {
    Login: { screen: Login },
    Signup: { screen: Signup },
    FindPw: { screen: FindPw },
  },
  {
    initialRouteName: 'Login',
  },
);

export default StackNavigator;
