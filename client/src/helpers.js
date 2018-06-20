export const signUp = (user, cb) => {
  const request = new Request(
    'http://localhost:4000/api/users',
    {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json',
      }
    },
  );
  fetch(request)
  .then((resp) => {
    if (resp.status === 201) {
      cb(true);
    }
    else {
      cb(false);
    }
  })
};
