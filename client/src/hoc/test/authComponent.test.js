/* eslint no-undef: 0 */
import React from 'react';
import { shallow } from 'enzyme';
import authComponent from '../authComponent';

const Dummy = () => (<div>hello</div>);

const WrappedDummy = authComponent(Dummy);

describe('Component wrapped with auth', () => {
  it('renders Redirect when user NOT autheticated', () => {
    const wrapper = shallow(<WrappedDummy />);

    expect(wrapper.find('Redirect')).toHaveLength(1);
    expect(wrapper.find('Dummy')).toHaveLength(0);
  });
  it('renders when user autheticated', () => {
    const wrapper = shallow(<WrappedDummy auth />);

    expect(wrapper.find('Dummy')).toHaveLength(1);
  });
});
