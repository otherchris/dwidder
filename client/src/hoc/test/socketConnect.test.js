/* eslint no-undef:0 */
import React from 'react';
import { mount } from 'enzyme';
import socketConnect from '../socketConnect';
import { MockSocket } from './mocks';

class Dummy extends React.Component { render() { return (<div />); } }

const mockSocket = new MockSocket();

const WrappedDummy = socketConnect(Dummy);

const wrapper = mount(<WrappedDummy socket={mockSocket} />);

describe('socketConnect HOC', () => {
  it('adds a data prop with a hello field', () => {
    wrapper.state('channel').emit('hello', 'world');
    setTimeout(() => { expect(wrapper.props().data).toHaveProperty('hello', 'world'); }, 500);
  });
});
