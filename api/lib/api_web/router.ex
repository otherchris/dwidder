defmodule ApiWeb.Router do
  use ApiWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", ApiWeb do
    pipe_through :api

    resources "/sessions", SessionController, only: [:create]
    resources "/users", UserController, only: [:create, :index]
    resources "/posts", PostController
  end
end
