import 'react-native';
import React from 'react';
import Login, { styles } from '../Login';

import TextInput from '../../shared/TextInput';
import Button from '../../shared/Button';

import renderer from 'react-test-renderer';
import { shallow, render } from 'enzyme';

let props;
let wrapper;
let tree;
let instance;

describe('rendering test', () => {
  beforeEach(() => {
    props = {
      navigation: {
        navigate: jest.fn(),
      },
    };
    wrapper = shallow(<Login {...props}/>);
    tree = renderer.create(<Login {...props} />).toJSON();
    instance = renderer.create(<Login {...props}/>).getInstance();
    // instance = wrapper.instance();
  });

  it('should renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should renders inital state', () => {
    expect(instance.state.email).toEqual('');
    expect(instance.state.password).toEqual('');
    expect(instance.state.isLoggingIn).toEqual(false);
  });

  it('should find components', () => {
    expect(wrapper.find('ScrollView')).toHaveLength(1);
    expect(wrapper.find('Text')).toHaveLength(3);
    expect(wrapper.find(TextInput)).toHaveLength(2);
    expect(wrapper.find(Button)).toHaveLength(2);
    expect(wrapper.find('Text').at(0)).toHaveLength(1);
  });

  it('should have default style', () => {
    expect(wrapper.find('View').at(0).prop('style')).toEqual(styles.container);
    expect(wrapper.find('View').at(0).childAt(0).prop('style')).toEqual(styles.iconWrapper);
    expect(wrapper.find('View').at(0).childAt(1).prop('style')).toEqual(styles.wrapper);
  });

  it('should change state onTextChanged', () => {
    instance.onTextChanged('EMAIL', 'aa@aa.aa');
    expect(instance.state.email).toEqual('aa@aa.aa');
    instance.onTextChanged('PASSWORD', 'aaaaaa');
    expect(instance.state.password).toEqual('aaaaaa');
  });
});

describe('interaction', () => {
  beforeEach(() => {
    props = {
      navigation: {
        navigate: jest.fn(),
      },
    };
    wrapper = shallow(<Login {...props} />);
    tree = renderer.create(<Login {...props} />).toJSON();
    instance = renderer.create(<Login {...props}/>).getInstance();
    // instance = wrapper.instance();
  });

  it('should call onLogin callback', () => {
    jest.useFakeTimers();
    const spy = jest.spyOn(wrapper.instance(), 'onLogin');
    const loginBtn = wrapper.find('#login');
    loginBtn.props().onPress();
    expect(spy).toHaveBeenCalled();
    expect(wrapper.instance().state.isLoggingIn).toEqual(true);
    jest.runAllTimers();
    expect(wrapper.instance().state.isLoggingIn).toEqual(false);
  });

  it('should go to FindPw on goToForgotPw callback', () => {
    const findPwBtn = wrapper.find('TouchableOpacity');
    findPwBtn.props().onPress();
    expect(props.navigation.navigate).toHaveBeenCalledWith('FindPw');
  });
});