# [React Native Animation](https://facebook.github.io/react-native/docs/animations)

### Reference
- [LayoutAnimation](https://facebook.github.io/react-native/docs/layoutanimation)
  * Chracteristics
    - Actually changes the layout of the components.
  * In order to et this working in `Android` add below code.
    ```
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    ```
- [Animated Api](https://facebook.github.io/react-native/docs/animations#animated-api)
  * Characteristics
    - Doesn't actually changes the layout of the component. `Animated` applies transformations to components on the screen without changing the actual layout of components on the screen.
    - Control and animate specific views
    - The most flexibility in crafting animations


