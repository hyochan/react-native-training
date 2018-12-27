import { AppRegistry, YellowBox } from 'react-native';
import App from './src/App';

YellowBox.ignoreWarnings([
  // 'Warning: componentWillMount is deprecated',
  // 'Warning: isMounted',
  'Warning: isMounted(...) is deprecated',
  'Class RCTCxxModule',
  'Module RCTImageLoader'
]);

AppRegistry.registerComponent('Example', () => App);
