/* eslint no-undef:0 */
import cloneDeep from 'lodash/cloneDeep';
import { dwidder, initialState } from '../reducers';

describe('dwidder reducer', () => {
  it('handles initial state', () => {
    expect(dwidder(undefined, {})).toEqual(initialState);
  });
  it('adds a session token', () => {
    expect(dwidder(cloneDeep(initialState), { type: 'ADD_SESSION', token: 'token' }))
      .toEqual({ auth: true, token: 'token', socket: {} });
  });
  it('adds a socket', () => {
    expect(dwidder(cloneDeep(initialState), { type: 'ADD_SOCKET', socket: { s: 'o' } }))
      .toEqual({ auth: false, token: '', socket: { s: 'o' } });
  });
});
