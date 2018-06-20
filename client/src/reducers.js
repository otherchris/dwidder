import assign from 'lodash/assign';

export const initialState = { socket: {}, token: '', auth: false }

export const dwidder = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SESSION':
      return assign(state, { auth: true, token: action.token });
    case 'ADD_SOCKET':
      return assign(state, { socket: action.socket });
    default:
      return state;
  };
};