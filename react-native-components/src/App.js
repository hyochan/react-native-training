import { getStatusBarHeight } from 'react-native-status-bar-height';
import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, Dimensions, AsyncStorage, Alert } from 'react-native';
import SwitchNavigator from './components/navigation/SwitchNavigator';
import { Provider } from 'mobx-react';
import { observer } from 'mobx-react/native';
import appStore from './stores/appStore';

class App extends React.Component {
  render() {
    return (
      <Provider store={ appStore }>
        <View style={styles.container}>
          <SwitchNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent',
  },
});

export default App;
