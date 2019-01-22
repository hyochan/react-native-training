# [React Native Animation](https://facebook.github.io/react-native/docs/animations)

### Reference
- [LayoutAnimation](https://facebook.github.io/react-native/docs/layoutanimation)
  * Chracteristics
    - Actually changes the layout of the components.
  * Usage
    - Practical Methods
      + linear
      + easeInEaseOut
      + spring
      + configureNext
    - Helper Methods
      + create
      + checkConfig
    - [Source](https://github.com/facebook/react-native/blob/master/Libraries/LayoutAnimation/LayoutAnimation.js)
  * [Easing](https://developers.google.com/web/fundamentals/design-and-ux/animations/the-basics-of-easing?hl=ko)
  * In order to et this working in `Android` add below code.
    ```
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    ```
- [Animated Api](https://facebook.github.io/react-native/docs/animations#animated-api)
  * Characteristics
    - Doesn't actually changes the layout of the component. `Animated` applies transformations to components on the screen without changing the actual layout of components on the screen.
    - Control and animate specific views
    - Provide flexibility in crafting animations
- Difference
  ![Alt text](https://github.com/dooboolab/react-native-training/blob/master/images/layout_anim%20%26%20animated.png)

