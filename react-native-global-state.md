# React Native Global State Management
1. Redux
2. Mobx
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