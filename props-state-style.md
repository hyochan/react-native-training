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

### Style
In [React Native](https://facebook.github.io/react-native/), we design layout using [flexbox](https://facebook.github.io/react-native/docs/flexbox). However, it is somewhat different from exact css. Check out [layout props](https://facebook.github.io/react-native/docs/layout-props).

[Example Source](https://github.com/dooboolab/react-native-training/blob/master/props-state/ExStyle)

- Flexbox
  + Tutorial
    - [Froggy Game](https://flexboxfroggy.com/)
  + Tips
    - Shorthand property of `flexGrow`, `flexShrink`, `flexBasis` is `flex`.
    - `justifyContent` manages primary axis.
       + `space-evenly` can be used from `react-native@0.54`. It was released in `0.52` but bug was updated and fully released in `0.54`. Releated [#17728](https://github.com/facebook/react-native/issues/17728).
    - `flexBasis` can be overried by `minWidth`(or `minHeight`) and `maxWidth`(or `maxHeight`), 
    - `alignItems` manages secondary axis.
  + Q & A
    - Difference bettween `flex-basis` and `width`?
      + `flex-basis` controls width or height depending on `flex-direction`.
      + `flex-basis` is only affected to `flex` items.

- [View Style Props](https://facebook.github.io/react-native/docs/view-style-props#elevation)
- [Text Style Props](https://facebook.github.io/react-native/docs/text-style-props#textalignvertical)
- [Image Style Props](https://facebook.github.io/react-native/docs/images#static-image-resources)
