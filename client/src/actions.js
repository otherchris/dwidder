export const addSession = (token) => {
  return {
    type: 'ADD_SESSION',
    token,
  }
};

export const addSocket = (socket) => {
  return {
    type: 'ADD_SOCKET',
    socket,
  }
};
