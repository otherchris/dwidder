export const addSession = session => ({
  type: 'ADD_SESSION',
  session,
});

export const addSocket = socket => ({
  type: 'ADD_SOCKET',
  socket,
});

export const addPosts = posts => ({
  type: 'ADD_POSTS',
  posts,
});
