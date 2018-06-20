export const addSession = token => ({
  type: 'ADD_SESSION',
  token,
});

export const addSocket = socket => ({
  type: 'ADD_SOCKET',
  socket,
});
