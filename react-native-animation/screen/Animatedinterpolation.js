import React, { Component } from 'react';
import { 
  StyleSheet, 
  View, 
  Animated, 
  TouchableWithoutFeedback,
  Text,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  diamond:{
    width: 100,
    height: 100,
  },
  circle: {
    height: 200,
    width: 200,
    borderRadius: 100,
    backgroundColor: 'skyblue'
  },
  backButton: {
    position: 'absolute',
    left: 15,
    top: 30,
  },
})

export default class InterpolateEx extends Component {
  state = {
    animation: new Animated.Value(0),
  };

  toggleAnimation = () => {
    const toValue = this._loop ? 0 : 2;

    Animated.loop(Animated.timing(this.state.animation, {
      toValue,
      duration: 2000,
    })).start();

    this._loop = !this._loop;
};

  render() {
    const rotateInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
      extrapolate: 'identity', // extend, clamp, identity
    });

    const colorInterpolate = this.state.animation.interpolate({
      inputRange: [0, .5, 1],
      outputRange: ['rgb(255, 99, 71)', 'rgb(255, 255, 71)','rgb(255, 99, 255)'],
    });

    const sizeInterpolate = this.state.animation.interpolate({
      inputRange: [0, .5, 1],
      outputRange: ['50%', '5%', '50%'],
      extrapolate: 'clamp',
    });

    // const opacityInterpolate = this.state.animation.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: [1, 0.9],
    // });

    const shapeStyle = {
      transform: [
        { rotate: rotateInterpolate },
      ],
    };
    
    const diaStyle = {
      backgroundColor: colorInterpolate,
      width: sizeInterpolate,
      height: sizeInterpolate,
      // opacity: opacityInterpolate
    };
    
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.toggleAnimation}>
          <Animated.View style={[styles.circle, shapeStyle]}>
            <Animated.View style={[styles.diamond, shapeStyle, diaStyle]} />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

