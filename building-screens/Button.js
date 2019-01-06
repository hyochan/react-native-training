import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    backgroundColor: 'transparent',
    alignSelf: 'center',
    borderRadius: 4,
    borderWidth: 2,
    width: '100%',
    height: '100%',
    borderColor: 'white',

    alignItems: 'center',
    justifyContent: 'center',
  },
  btnDisabled: {
    backgroundColor: 'rgb(243,243,243)',
    alignSelf: 'center',
    borderRadius: 4,
    borderWidth: 2,
    width: '100%',
    height: '100%',
    borderColor: '#333',

    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontSize: 14,
    color: 'white',
  },
  imgLeft: {
    width: 24,
    height: 24,
    position: 'absolute',
    left: 16,
  },
});

type Props = {};
export default class Shared extends Component<Props> {
  static defaultProps = {
    containerStyle: styles.container,
    isLoading: false,
    isDisabled: false,
    style: styles.btn,
    textStyle: styles.txt,
    imgLeftStyle: styles.imgLeft,
    indicatorColor: 'white',
  }

  render() {
    if (this.props.isDisabled) {
      return (
        <View style={this.props.containerStyle}>
          <View style={styles.props.disabledStyle}>
            <Text style={this.props.textStyle}>{this.props.children}</Text>
          </View>
        </View>
      )
    }
    if (this.props.isLoading) {
      return (
        <View style={this.props.containerStyle}>
          <View style={this.props.style}>
            <ActivityIndicator size='small' color={this.props.indicatorColor}/>
          </View>
        </View>
      )
    }
    return (
      <View style={this.props.containerStyle}>
        <TouchableOpacity
          onPress={this.props.onPress}
        >
          <View style={this.props.style}>
            {
              this.props.imgLeftStyle
                ? <Image
                  style={this.props.imgLeftStyle}
                  source={this.props.imgLeftSrc}
                />
                : <View />
            }
            <Text style={this.props.textStyle}>{this.props.children}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
