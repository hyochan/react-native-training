// @flow
import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';

import type {
  ____ViewStyleProp_Internal as ViewStyle,
  ____TextStyleProp_Internal as TextStyle,
  ____ImageStyleProp_Internal as ImageStyle,
} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

import TextInput from '../shared/TextInput';
import Button from '../shared/Button';

import { IC_APP } from '../../utils/Icons';
import { colors } from '../../utils/Styles';

type Style = {
  container: ViewStyle,
  iconWrapper: ViewStyle,
  icon: ImageStyle,
  iconTxt: TextStyle,
  wrapper: ViewStyle,
  viewBtnWrapper: ViewStyle,
  btnSignup: ViewStyle,
  txtSignUp: TextStyle,
  btnLogin: ViewStyle,
  txtLogin: TextStyle,
  touchForgotPw: ViewStyle,
  txtForgotPw: TextStyle,
  txtCopyright: TextStyle,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
  },
  iconWrapper: {
    position: 'absolute',
    top: 76,
    left: 40,

    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  icon: {
    width: 60,
    height: 48,
  },
  iconTxt: {
    fontSize: 20,
    color: colors.dusk,
    marginTop: 16,
    fontWeight: 'bold',
  },
  wrapper: {
    marginTop: 260,
    width: '78%',
    height: 300,
    alignSelf: 'center',

    flexDirection: 'column',
    alignItems: 'center',
  },
  wrapperInput: {
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  input: {
    alignSelf: 'stretch',
    color: colors.dusk,
    fontSize: 16,
    paddingVertical: 22,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: colors.paleGray,
  },
  viewBtnWrapper: {
    alignSelf: 'stretch',
    marginTop: 20,
    height: 60,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnSignup: {
    backgroundColor: 'transparent',
    borderRadius: 4,
    borderWidth: 1,
    height: '100%',
    width: '100%',
    borderColor: colors.dodgerBlue,

    alignItems: 'center',
    justifyContent: 'center',
  },
  txtSignup: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.dodgerBlue,
  },
  btnLogin: {
    backgroundColor: colors.dodgerBlue,
    borderColor: colors.dodgerBlue,
    borderRadius: 4,
    borderWidth: 1,
    height: 60,
    shadowColor: colors.dodgerBlue,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 4,
    shadowOpacity: 0.3,


    alignItems: 'center',
    justifyContent: 'center',
  },
  txtLogin: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  touchForgotPw: {
    marginTop: 20,
  },
  txtForgotPw: {
    fontSize: 12,
    color: colors.dodgerBlue,
    textDecorationLine: 'underline',
  },
  txtCopyright: {
    marginTop: 80,
    fontSize: 12,
    color: colors.cloudyBlue,
  },
});

type Props = {
  navigation: any,
};
type State = {
  email: string,
  password: string,
  isLoggingin: boolean,
};

export default class App extends Component<Props, State> {
  static navigationOptions = {
    headerStyle: {
      borderBottomWidth: 0,
    },
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoggingin: false,
    };
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.iconWrapper}>
            <Image style={styles.icon} source={ IC_APP }/>
            <Text style={styles.iconTxt}>Hello</Text>
          </View>
          <View style={styles.wrapper}>
            <View style={styles.wrapperInput}>
              <TextInput
                style={{ marginTop: 60 }}
                txt={this.state.email}
                txtHint='Please write email address.'
                placeHolderTextColor={colors.blueyGray}
                onTextChanged={(text) => {
                  this.onTextChanged('EMAIL', text);
                }}
              />
              <TextInput
                style={{ marginTop: 8 }}
                txt={this.state.password}
                txtHint='Please write password.'
                placeHolderTextColor={colors.blueyGray}
                onTextChanged={(text) => {
                  this.onTextChanged('PASSWORD', text);
                }}
                isPassword
              />
            </View>
            <View style={styles.viewBtnWrapper}>
              <Button
                containerStyle={{ flex: 1 }}
                onPress={() => {
                  this.props.navigation.navigate('Signup');
                }}
                style={styles.btnSignup}
                textStyle={styles.txtSignup}
              >Sign Up</Button>
              <View style={{ width: 8 }}/>
              <Button
                containerStyle={{ flex: 1 }}
                isLoading={this.state.isLoggingin}
                onPress={() => {
                  this.setState({
                    isLoggingin: true
                  }, () => {
                    setTimeout(() => {
                      this.setState({
                        isLoggingin: false,
                      });
                    }, 3000);
                  })
                }}
                style={styles.btnLogin}
                textStyle={styles.txtLogin}
              >Login</Button>
            </View>
            <TouchableOpacity
              style={styles.touchForgotPw}
            >
              <Text style={styles.txtForgotPw}>Forgot password?</Text>
            </TouchableOpacity>
            <Text style={styles.txtCopyright}>copyright by dooboolab.com</Text>
          </View>
        </View>
      </ScrollView>
    );
  }

  onTextChanged = (type: string, text: string) => {
    switch(type) {
      case 'EMAIL':
        this.setState({
          email: text,
        });
      break;
      case 'PASSWORD':
        this.setState({
          password: text,
        });
      break;
    }
  }
}
