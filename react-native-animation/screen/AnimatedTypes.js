/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
  Easing,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  box: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  decay: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
    borderRadius: 25,
    position: 'absolute',
    top: 100,
    left: 50,
  },
  timing: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
    borderRadius: 25,
    position: 'absolute',
    top: 100,
    left: 125,
  },
  spring: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
    borderRadius: 25,
    position: 'absolute',
    top: 100,
    left: 200,
  },
  easing: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
    borderRadius: 25,
    position: 'absolute',
    top: 100,
    left: 275,
  },
});


type Props = {};
export default class App extends Component<Props> {
  state = {
    decay: new Animated.Value(0),
    timing: new Animated.Value(0),
    spring: new Animated.Value(0),
    easing: new Animated.Value(0),
  };

  render() {
    const decayStyle = {
      transform: [
        { translateY: this.state.decay }
      ],
    };

    const timingStyle = {
      transform: [
        { translateY: this.state.timing }
      ],
    };

    const springStyle = {
      transform: [
        { translateY: this.state.spring }
      ],
    };

    const easingStyle = {
      transform: [
        { translateY: this.state.easing }
      ],
    };

    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <TouchableWithoutFeedback onPress={this.decayAnimation}>
            <Animated.View style={[styles.decay, decayStyle]}/>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={this.timingAnimation}>
            <Animated.View style={[styles.timing, timingStyle]}/>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={this.springAnimation}>
            <Animated.View style={[styles.spring, springStyle]} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={this.easingAnimation}>
            <Animated.View style={[styles.easing, easingStyle]}/>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }

  decayAnimation = () => {
    Animated.decay(this.state.decay, {
      velocity: 1,
      deceleration: 0.998,
    }).start(() => {
      this.state.decay.setValue(0);
    });
  }

  timingAnimation = () => {
    Animated.timing(this.state.timing, {
      toValue: height - 200,
      duration: 3000,
    }).start(() => {
      this.state.timing.setValue(0);
    });
  }

  springAnimation = () => {
    Animated.spring(this.state.spring, {
      toValue: height-200,
      friction: 10,
      tension: 100,
    }).start(() => {
      this.state.spring.setValue(0);
    });
  }

  easingAnimation = () => {
    Animated.timing(this.state.easing, {
      toValue: height - 200,
      duration: 1500,
      easing: Easing.exp,
    }).start(() => {
      this.state.timing.setValue(0);
    });
  }
}
