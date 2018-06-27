/* eslint no-undef:0 */
import cloneDeep from 'lodash/cloneDeep';
import { dwidder, initialState } from '../reducers';

describe('dwidder reducer', () => {
  it('handles initial state', () => {
    expect(dwidder(undefined, {})).toEqual(initialState);
  });
  it('adds a session token', () => {
    expect(dwidder(cloneDeep(initialState), { type: 'ADD_SESSION', session: { token: 'token' } }))
      .toEqual({
        auth: true,
        posts: [],
        session: { token: 'token' },
        socket: {},
      });
  });
  it('adds a socket', () => {
    expect(dwidder(cloneDeep(initialState), { type: 'ADD_SOCKET', socket: { s: 'o' } }))
      .toEqual({
        auth: false,
        session: {},
        socket: { s: 'o' },
        posts: [],
      });
  });
  it('adds a post list', () => {
    expect(dwidder(cloneDeep(initialState), { type: 'ADD_POSTS', posts: ['a', 'b'] }))
      .toEqual({
        auth: false,
        session: {},
        socket: {},
        posts: ['a', 'b'],
      });
  });
});
