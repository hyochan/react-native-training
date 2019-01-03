# Props & State
There are two objects(Props & State) passed to `Compoenent` in react.
[Example Source](https://github.com/dooboolab/react-native-training/blob/master/props-state/ExPropsState)

### Props
- Props is immutable inside `Component`.
- Setting default props.
  ```
  // using static
  static defaultProps = {
    text: 'hello',
  };
  ```

### State
- State is mutable.
- Setting default state.
  ```
  state = {
    cnt: 0,
    text: 'Text',
  };
  ```
  recommended in contructor.
  ```
  constructor(props) {
    super(props);
    this.state = {
      cnt: 0,
      text: 'Text',
      propState: props.text,
    };
  }
  ```

- Changing state.
  + Should call `setState` to change state variable.
    ```
    this.setState({
      text: 'Changed: ' + this.state.cnt++,
      propState: 'new text',
    });
    ```

