## June 13, 2018

  Let's build a simple twitter clone using Phoenix and React. So far I have
  arrived at the basic architecture I want to use: an Elixir Phoenix api that
  uses websockets to communicate with a React client. The client should be as
  passive as possible, with any critical validations happening on the server.
  Doing so will make it more likely that we will be able to safely publish an
  API that gives users the ability to their client of choice. If we had wanted
  to prevent this from happening, we might have cryptographically signed the
  client.

  #### TODOs for first sprint

  #### Goal: Automated testing and deploys for local, dev, and prod environments
  - [X] Set up Phoenix project (`--no-brunch --no-html`) with usual dev deps
  - [X] Set up `create-react-app` project
  - [X] Connect client to server with a "hello world" message
  - [X] Set up testing
    - `mix test.watch` for Elixir unit tests
    - `jest` for React unit tests
    - `cypress` for local integration
    - `cypress` for local/dev/prod end-to-end
    - `credo` and `eslint` for linting
  - [X] Script PR check (with an eye toward CI later)


  #### TODOs for next sprint (WIP- starting with second sprint will move to GH
  issues)

  #### Goal: Implement websocket/graphQL API and user authentication
  - [ ] Add graphQL consumption with Apollo to client
  - [ ] Add user authentication to back end
  - [ ] Story: "As a user, when not logged in, when I visit dwidder, I see
    a log in/create account page"
  - [ ] Story: "As a user I can set up an account with an email address"
  - [ ] Story: "As a user with an account, I can log in to the application"
  - [ ] Story: "As a user, when I am logged in, when I visit dwidder, I see
    a Feed"

## June 14, 2018

  Commit `06fb6b918bc25d71484` is a deep rabbit hole into mocking the websocket
  connection in the client. Interesting how the hoc refactored to make the
  testing work. Have to remember to revisit this and see if it was the right
  choice.

## June 15, 2018

  Added a nice soon-to-be CI script.

  - [ ] Story: "As a user, when not logged in, when I visit dwidder, I see
    a log in/create account page"

  - [ ] See a login field
  - [ ] See a password field
  - [ ] See a sign up link

## June 17, 2018

  Driving most of the day, still added the UI for log in/sign up. Using a HOC
  to hide/show pages based on auth. (Note, this is not security, dashboard
  should not populate for unauth'ed user even if the page displays the
  component)

## June 18, 2018

  Building out api auth roughly following this
  [guide](https://blog.codeship.com/ridiculously-fast-api-authentication-with-phoenix/).
  Note ffr [notes on deploying
  `comeonin`](https://github.com/riverrun/comeonin/wiki/Deployment)
