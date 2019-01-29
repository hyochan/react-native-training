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
  * Types of Animated
    - [decay](https://facebook.github.io/react-native/docs/animated#decay)
      + starts with an initial velocity and gradually slows to a stop.
    - [timing](https://facebook.github.io/react-native/docs/animated#timing)
      + animates a value over time using easing functions.
    - [spring](https://facebook.github.io/react-native/docs/animated#spring)
      + provides a simple spring physics model.
    - [easing](https://facebook.github.io/react-native/docs/animated#easing)
      + This is used by Animated.timing to convey physically believable motion in animations.
    - [loop](https://facebook.github.io/react-native/docs/animated#loop)
    - [stagger](https://facebook.github.io/react-native/docs/animated#stagger)
    - [event](https://facebook.github.io/react-native/docs/animated#event)
  * Composing Animation
    - [parrallel](https://facebook.github.io/react-native/docs/animated#parrallel)
      + starts a number of animations at the same time.
    - [sequence](https://facebook.github.io/react-native/docs/animated#sequence)
      + starts the animations in order, waiting for each to complete before starting the next.
  * [Interpolation](https://facebook.github.io/react-native/docs/animated#interpolation)
    - The interpolate function allows input ranges to map to different output ranges (number, degree, rgb, etc).
  * Extrapolation
    - The default value is extend but you can use clamp to prevent the output value from exceeding outputRange (extend, clamp, identity).
    - Types
      + extend (default)
        - It will increate input proportionally.
      + clamp
        - It will stick to maximum value.
      + identity
        - It will be same as input value.



- Difference
  ![Alt text](https://github.com/dooboolab/react-native-training/blob/master/images/layout_anim%20%26%20animated.png)

- Exercise resrouce
  * [Download Icons](https://firebasestorage.googleapis.com/v0/b/foodieon-292ad.appspot.com/o/icons.zip?alt=media&token=9a0ba214-d27d-42b1-9b1d-4aaee5244549)
  * Final results
    + Roadmap
      ![Alt text](https://github.com/dooboolab/react-native-training/blob/master/images/task_roadmap.png)
    + Result
      ![Alt text](https://github.com/dooboolab/react-native-training/blob/master/images/task_result.gif)
