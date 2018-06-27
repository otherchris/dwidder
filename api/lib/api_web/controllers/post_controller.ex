defmodule ApiWeb.PostController do
  use ApiWeb, :controller

  alias Api.Repo
  alias ApiWeb.Session
  alias ApiWeb.Post
  alias ApiWeb.User
  alias ApiWeb.ErrorView

  def create(conn, %{"post" => post_params}) do
    post_changeset = Post.changeset(%Post{}, post_params)
    case Repo.insert(post_changeset) do
      {:ok, post} ->
        conn
        |> put_status(:created)
        |> render("show.json", post: post)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(ErrorView, "post_create_error.json", changeset: changeset)
    end
  end

  def index(conn, params) do
    results = Repo.all(Post)
              |> IO.inspect
    conn
    |> render("index.json", %{results: results})
  end
end
