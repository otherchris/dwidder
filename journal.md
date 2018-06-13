## June 13, 2018

  Let's build a simple twitter clone using Phoenix and React. So far I have
  arrived at the basic architecture I want to use: an Elixir Phoenix api that
  uses websockets to communicate with a React client. The client should be as
  passive as possible, with any critical validations happening on the server.
  Doing so will make it more likely that we will be able to safely publish an
  API that gives users the ability to their client of choice. If we had wanted
  to prevent this from happening, we might have cryptographically signed the
  client.

  TODOs for first sprint

  Goal: Automated testing and deploys for local, dev, and prod environments
  - [ ] Set up Phoenix project (`--no-brunch --no-html`) with usual dev deps
  - [ ] Set up `create-react-app` project
  - [ ] Connect client to server with a "hello world" message
  - [ ] Set up testing
    - `mix test.watch` for Elixir unit tests
    - `jest` for React unit tests
    - `cypress` for local integration
    - `cypress` for local/dev/prod end-to-end
    - `credo` and `eslint` for linting
  - [ ] Containerize the application (suitable for Heroku deploy)
  - [ ] Script dev/prod deploys and PR checks

  TODOs for next sprint (WIP)

  Goal: Implement websocket API and user authentication
  - [ ] Describe first iteration of websocket API
  - [ ] Add user authentication to back end
  - [ ] Story: "As a user I can set up an account with an email address"
  - [ ] Story: "As a user with an account, I can log in to the application"

[//]: # (1 hour)
