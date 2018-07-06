defmodule ApiWeb.PostController do
  use ApiWeb, :controller

  alias Api.Repo
  alias ApiWeb.ErrorView
  alias ApiWeb.Post
  alias ApiWeb.Session
  alias ApiWeb.User

  def create(conn, %{"post" => post_params}) do
    post_changeset = Post.changeset(%Post{}, post_params)
    case Repo.insert(post_changeset) do
      {:ok, post} ->
        post_with_user = Repo.preload(post, :user)
        conn
        |> put_status(:created)
        |> render("show.json", post: post_with_user)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(ErrorView, "post_create_error.json", changeset: changeset)
    end
  end

  def index(conn, params) do
    results = Repo.all(Post)
    |> Repo.preload :user
    conn
    |> render("index.json", %{results: results})
  end
end
