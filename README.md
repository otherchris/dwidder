## dwidder

### It's like twitter, but less!

Running locally:

```
$ git clone git@github.com:otherchris/dwidder.git
$ cd client
$ npm i
$ npm start

$ cd ../api
$ mix deps.get
$ mix ecto.create
$ mix ecto.migrate
$ mix phx.server

$ cd ..
$ ./full_test.sh
```
