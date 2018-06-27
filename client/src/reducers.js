import assign from 'lodash/assign';

export const initialState = { socket: {}, session: {}, auth: false, posts: [] };

export const dwidder = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SESSION':
      return assign(state, { auth: true, session: action.session });
    case 'ADD_SOCKET':
      return assign(state, { socket: action.socket });
    case 'ADD_POSTS':
      return assign(state, { posts: action.posts });
    default:
      return state;
  }
};
