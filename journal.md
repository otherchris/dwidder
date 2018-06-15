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
  - [X] Set up Phoenix project (`--no-brunch --no-html`) with usual dev deps
  - [X] Set up `create-react-app` project
  - [X] Connect client to server with a "hello world" message
  - [X] Set up testing
    - `mix test.watch` for Elixir unit tests
    - `jest` for React unit tests
    - `cypress` for local integration
    - `cypress` for local/dev/prod end-to-end
    - `credo` and `eslint` for linting
  - [ ] ~~Containerize the application (suitable for Heroku deploy)~~
  - [ ] ~~Script dev/prod deploys and PR checks~~
  - [ ] Script PR check (with an eye toward CI later)
[//]: # (0.5 hour/2 items)
[//]: # (2 hour/1 items: had to relearn how to connect a channel)


  TODOs for next sprint (WIP)

  Goal: Implement websocket API and user authentication
  - [ ] Describe first iteration of websocket API
  - [ ] Add user authentication to back end
  - [ ] Story: "As a user I can set up an account with an email address"
  - [ ] Story: "As a user with an account, I can log in to the application"

## June 14, 2018

  Commit `06fb6b918bc25d71484` is a deep rabbit hole into mocking the websocket
  connection in the client. Interesting how the hoc refactored to make the
  testing work. Have to remember to revisit this and see if it was the right
  choice.



