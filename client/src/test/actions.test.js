/* eslint no-undef: 0 */
import * as actions from '../actions';

describe('auth actions', () => {
  it('addSession should create ADD_SESSION action', () => {
    expect(actions.addSession('token')).toEqual({
      type: 'ADD_SESSION',
      token: 'token',
    });
  });
  it('addSocket should create ADD_SOCKET action', () => {
    expect(actions.addSocket('socket')).toEqual({
      type: 'ADD_SOCKET',
      socket: 'socket',
    });
  });
});
