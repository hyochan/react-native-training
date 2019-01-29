/** @format */

import {AppRegistry} from 'react-native';
import LayoutAnimation from './screen/LayoutAnimation';
import AnimatedTypes from './screen/AnimatedTypes';
import AnimatedComposing from './screen/AnimatedComposing';
import AnimatedInterpolation from './screen/Animatedinterpolation';
import DiceGame from './screen/DiceGame';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => DiceGame);
