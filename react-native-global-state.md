# React Native Global State Management
1. [Redux](https://github.com/dooboolab/react-native-training/blob/master/react-native-global-state.md#redux)
2. [Mobx](https://github.com/dooboolab/react-native-training/blob/master/react-native-global-state.md#mobx)
3. Context Api

### Redux
![Alt text](https://cdn-images-1.medium.com/max/1600/1*87dJ5EB3ydD7_AbhKb4UOQ.png)
1. Install
  ```
  npm install --save react-redux redux
  ```
2. Make actions in `actions/index.js`.
  ```
  export function myAction(value) {
  return {
    type: 'MY_ACTION_TYPE',
    value,
  };
  ```
3. Make reducers in `reducers/index.js`.
  ```
  const initialState = {
    text: '',
  };

  function getText(state = initialState.text, action) {
    switch (action.type) {
      case 'MY_ACTION_TYPE':
        return action.value;
      default:
        return state;
    }
  }

  const reducers = {
    getText,
  };

  export default reducers;
  ```
4. Create store from `action` and `reducer`.
  ```
  const store = createStore(
    combineReducers({
      ...reducers,
    }),
  );
  ```
5. Wrap component with `Provider` in `react-redux`.
  - `<Provider store={store}><App/></Provider>`
6. Create `mapState` and `mapDispatch` and `connect` with component.
  ```
  const mapState = (state) => ({
    text: state.text,
  });

  const mapDispatch = (dispatch) => ({
    onUpdateText: (text) => dispatch(getText(text)),
  });

  connect(mapState1, mapDispatch1)(View1)
  ```
7. Dispatch your action, then you will get updated state as `props`.
  ```
  <TextInput
    style={styles.input}
    value={this.props.inputText}
    onChangeText={(text) => {
      this.props.onUpdateText(text);
    }}
  />
  ```

### Mobx
![Alt text](https://d33wubrfki0l68.cloudfront.net/f9a8f502c4cc51bf5e112aa4847c5413a2b6b2a8/076d8/static/mobx-diagram-616ed205dd060bad61290fb63402a1e0.jpg)

1. Install mobx
  ```
  npm install --save mobx mobx-react
  ```
2. Install es7 decorator plugin
  ```
  npm install --save-dev @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators
  ```
3. Add plugins to `babel.config.js`
  ```
  plugins: [
    ["@babel/plugin-proposal-decorators", { "legacy": true}],
    ["@babel/plugin-proposal-class-properties", { "loose": true}]
  ]
  ```
4. Wrap app with Provider Provider
  ```
  import { Provider } from 'mobx-react';
  import appStore from '../stores/appStore';
  <Provider store={appStore}><App/></Provider>
  ```
5. Create mobx store
  ```
  import { observable } from 'mobx';

  class ObservableListStore {
    @observable text: string = '';
  }

  const observableListStore = new ObservableListStore();
  export default observableListStore;
  ```
6. Consume `observable`
  ```
  import { inject } from 'mobx-react/native';
  import { observer } from 'mobx-react';

  @inject('store') @observer
  class View1 extends Component {
    render() {
      return (
        <View style={styles.wrapper1}>
          <Text style={styles.text1}>View 1</Text>
          <TextInput
            style={styles.input}
            value={this.props.store.text}
            onChangeText={(text) => {
              this.props.store.text = text;
            }}
          />
        </View>
      );
    }
  }
  ```

### Context Api