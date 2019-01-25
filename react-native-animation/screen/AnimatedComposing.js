import React, { Component } from 'react';
import { 
  StyleSheet, 
  View, 
  Animated, 
  TouchableWithoutFeedback, 
  Dimensions, 
  Text, 
  TouchableOpacity ,
  Easing,
} from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    height: '100%',
    width: '100%',
    alignItems:'center',
    justifyContent: 'flex-start',
  },
  ball1: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'red',
    position: 'absolute',
    top: 100,
    left: 50,
  },
  ball2: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'red',
    position: 'absolute',
    top: 100,
    left: 125,
  },
  ball3: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'red',
    position: 'absolute',
    top: 100,
    left: 200,
  },
});

export default class AnimatedTypes extends Component {
  state = {
    ball1: new Animated.ValueXY(),
    ball2: new Animated.ValueXY(),
    ball3: new Animated.ValueXY(),
  };

  parrallelAnimation = () => {
    Animated.parallel([
      Animated.timing(this.state.ball1.y, {
        toValue: height-300,
        duration: 1500,
        easing: Easing.bounce
      }),
      Animated.timing(this.state.ball1.x, {
        toValue: width/2,
        duration: 1500,
        easing: Easing.exp
      })
    ]).start(() => {
      this.state.ball1.x.setValue(0);
      this.state.ball1.y.setValue(0);
    });
  };

  sequenceAnimation = () => {
    Animated.sequence([
      Animated.timing(this.state.ball2.y, {
        toValue: height-300,
        duration: 1500,
        easing: Easing.bounce
      }),
      Animated.timing(this.state.ball2.x, {
        toValue: width/2,
        duration: 1500,
        easing: Easing.exp
      }),
    ]).start(() => {
      this.state.ball2.x.setValue(0);
      this.state.ball2.y.setValue(0);
    });
  }

  combineComposedAnimation = () => {
    Animated.parallel([
      Animated.timing(this.state.ball3.y, {
        toValue: height-500,
        duration: 1500,
        easing: Easing.bounce
      }),
      Animated.sequence([
        Animated.timing(this.state.ball3.y, {
          toValue: height-300,
          duration: 1500,
          easing: Easing.bounce
        }),
        Animated.timing(this.state.ball3.x, {
          toValue: width/2,
          duration: 1500,
          easing: Easing.exp
        })
      ]),
    ]).start(() => {
      this.state.ball3.x.setValue(0);
      this.state.ball3.y.setValue(0);
    });
  }

  render() {
    const ballStyle1 = {
      transform: this.state.ball1.getTranslateTransform()
    };
    const ballStyle2 = {
      transform: this.state.ball2.getTranslateTransform()
    };
    const ballStyle3 = {
      transform: this.state.ball3.getTranslateTransform()
    };

    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <TouchableWithoutFeedback onPress={this.parrallelAnimation}>
            <Animated.View style={[styles.ball1, ballStyle1]} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={this.sequenceAnimation}>
            <Animated.View style={[styles.ball2, ballStyle2]} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={this.combineComposedAnimation}>
            <Animated.View style={[styles.ball3, ballStyle3]} />
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}
