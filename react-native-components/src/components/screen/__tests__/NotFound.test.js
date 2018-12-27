import 'react-native';
import * as React from 'react';
import NotFound from '../NotFound';
import appStore from '../../../stores/appStore';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { shallow, render } from 'enzyme';

describe('NotFound', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<NotFound store={appStore}/>).toJSON();
    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });

  describe('component test', () => {
    const wrapper = shallow(
      <NotFound store={appStore} />,
    );

    it('renders as expected', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
