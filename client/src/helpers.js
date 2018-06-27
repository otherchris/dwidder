/* eslint no-undef:0 */
export const signUp = (user, cb) => {
  const request = new Request(
    'http://localhost:4000/api/users',
    {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json',
      },
    },
  );
  fetch(request)
    .then((resp) => {
      if (resp.status === 201) {
        cb(true);
      } else {
        cb(false);
      }
    });
};

export const login = (user, cb) => {
  const request = new Request(
    'http://localhost:4000/api/sessions',
    {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json',
      },
    },
  );
  fetch(request)
    .then((resp) => {
      if (resp.status === 201) {
        resp.json()
          .then(data => cb(true, {
            userId: data.data.user_id,
            token: data.data.token,
            userName: data.data.user_name,
          }));
      } else {
        cb(false);
      }
    });
};

export const post = (postData, cb) => {
  const request = new Request(
    'http://localhost:4000/api/posts',
    {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'content-type': 'application/json',
      },
    },
  );
  fetch(request)
    .then((resp) => {
      if (resp.status === 201) {
        resp.json()
          .then(data => console.log(data))
      } else {
        cb(false);
      }
    });
};
