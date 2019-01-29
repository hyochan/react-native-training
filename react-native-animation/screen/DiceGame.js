// @flow
import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
  Button,
  Animated,
  Easing,
  Dimensions,
} from 'react-native';

import {
  IC_DICE,
  IC_DICE_1,
  IC_DICE_2,
  IC_DICE_3,
  IC_DICE_4,
  IC_DICE_5,
  IC_DICE_6,
} from '../utils/Icons';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

type Props = {

};

type State = {
  dice: any,
  rollingDiceImage: any,
  rotateAnimation: any,
  scaleAnimation: any,
  diceNum: number,
}

class Screen extends Component<Props, State> {
  static diceInterval;
  static diceTimeout;

  constructor(props) {
    super(props);
    this.state = {
      dice: new Animated.ValueXY({ x: 30, y: 120 }),
      rotateAnimation: new Animated.Value(0),
      scaleAnimation: new Animated.Value(0.6),
      rollingDiceImage: IC_DICE,
      diceNum: 0,
    };
  }

  render() {
    const rotateInterpolate = this.state.rotateAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '3600deg'],
    });

    const diceStyle = {
      transform: [
        ...this.state.dice.getTranslateTransform(),
        { rotate: rotateInterpolate },
      ],
    };

    const doneStyle = {
      transform: [
        { scale: this.state.scaleAnimation },
      ]
    }

    return (
      <View style={styles.container}>
        <Text style={{
          fontWeight: 'bold',
          fontSize: 32,
        }}>주사위 굴리기</Text>
        <TouchableOpacity
          onPress={this.rollDice}
          style={{
            alignSelf: 'stretch',
          }}
        >
          <View style={{
            marginVertical: 48,
            marginHorizontal: 24,
            alignSelf: 'stretch',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            height: 480,
          }}>
            <Animated.Image
              source={this.state.rollingDiceImage}
              style={[
                diceStyle,
                {
                  width: 50,
                  height: 50,
                }
             ]}
            />
          </View>
        </TouchableOpacity>
        {/* text after anim finished */}
        {
          this.state.diceRolled
            ? <Animated.View style={[
              doneStyle,
              {
                position: 'absolute',
                alignItems: 'center',
                justifyContent: 'center',
              },
            ]}>
              <Text style={{
                fontSize: 32,
                color: 'orange',
                marginBottom: 8,
              }}>{this.state.diceNum}</Text>
              <Text style={{
                fontSize: 14,
                marginHorizontal: 24,
                marginBottom: 24,
              }}>{this.state.diceText}</Text>
              <Button
                title='다시하기'
                onPress={this.reset}
              />
            </Animated.View>
            : <View/>
        }
      </View>
    );
  }

  reset = () => {
    this.setState({
      diceRolled: false,
      rollingDiceImage: IC_DICE,
    });
    this.state.dice.setValue({ x: 30, y: 120 });
    this.state.rotateAnimation.setValue(0);
    this.state.scaleAnimation.setValue(0.6);
    if (this.diceInterval) {
      clearInterval(this.diceInterval);
    }
    if (this.diceTimeout) {
      clearTimeout(this.diceTimeout);
    }
  }

  rollDice = () => {
    this.reset();

    Animated.parallel([
      Animated.timing(this.state.rotateAnimation, {
        toValue: 1,
        duration: 3000,
      }),
      Animated.sequence([
        Animated.parallel([
          Animated.timing(this.state.dice.y, {
            toValue: screenHeight-900,
            duration: 800,
            easing: Easing.in,
          }),
          Animated.timing(this.state.dice.x, {
            toValue: screenWidth-300,
            duration: 800,
          }),
        ]),
        Animated.parallel([
          Animated.timing(this.state.dice.y, {
            toValue: screenHeight-300,
            duration: 2200,
            easing: Easing.bounce,
          }),
          Animated.timing(this.state.dice.x, {
            toValue: screenWidth-100,
            duration: 2200,
          }),
        ]),
      ]),
    ]).start();

    this.diceInterval = setInterval(() => {
      const diceNum = Math.floor((Math.random() * 6) + 1); // 1 ~ 6
      this.setState({
        diceNum,
        rollingDiceImage: diceNum === 1
          ? IC_DICE_1
          : diceNum === 2
          ? IC_DICE_2
          : diceNum === 3
          ? IC_DICE_3
          : diceNum === 4
          ? IC_DICE_4
          : diceNum === 5
          ? IC_DICE_5
          : IC_DICE_6
      });
    }, 300);

    this.diceTimeout = setTimeout(() => {
      let doneDiceImage;
      let diceText;

      clearInterval(this.diceInterval);
      clearTimeout(this.diceTimeout);

      switch (this.state.diceNum) {
        case 1:
          doneDiceImage = IC_DICE_1;
          diceText = '아쉽네요 다음에 다시 시도하세요ㅠㅠ';
          break;
        case 2:
          doneDiceImage = IC_DICE_2;
          diceText = '힘내세야 다음에는 더 좋은 번호가 나올 거에요!';
          break;
        case 3:
          doneDiceImage = IC_DICE_3;
          diceText = '평균보다 조금 낮은 점수에요. 다음에 다시 시도해주세요!';
          break;
        case 4:
          doneDiceImage = IC_DICE_4;
          diceText = '평균보다 조금 높아요.. 잘했어요!';
          break;
        case 5:
          doneDiceImage = IC_DICE_5;
          diceText = '와우 최고는 아니지만 높은 번호가 나왔어요~';
          break;
        case 6:
          doneDiceImage = IC_DICE_6;
          diceText = '최고에요!!';
          break;
      }

      this.setState({
        doneDiceImage,
        diceText,
        diceRolled: true,
      }, () => {
        Animated.timing(this.state.scaleAnimation, {
          toValue: 1,
          duration: 1000,
        }).start();
      });
    }, 3000);
  }
}

export default Screen;
