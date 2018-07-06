defmodule ApiWeb.PostControllerTest do
  use ApiWeb.ConnCase

  alias Api.Repo
  alias ApiWeb.Post
  alias ApiWeb.User

  @valid_attrs %{text: "this is a post"}

  setup %{conn: conn} do
    user_changeset = User.changeset(%User{}, %{name: "name", email: "as@em.ail", password: "pwdded"})
    {:ok, %{id: user_id}} = Repo.insert(user_changeset)
    post_changeset = Post.changeset(%Post{}, Map.put(@valid_attrs, :user_id, user_id))
    {:ok, %{id: post_id}} = Repo.insert(post_changeset)
    {:ok, conn: put_req_header(conn, "accept", "application/json"), user_id: user_id, post_id: post_id}
  end

  test "creates and renders resource when data is valid", %{conn: conn, user_id: user_id} do
    conn = post conn, post_path(conn, :create), post: Map.put(@valid_attrs, :user_id, user_id)
    body = json_response(conn, 201)
    assert body["data"]["id"]
    assert body["data"]["user"]["id"]
    assert body["data"]["text"] == "this is a post"
    assert body["data"]["user"]["name"] == "name"
    assert Repo.get_by(Post, id: body["data"]["id"])
  end

  test "does not create resource and renders errors when data is invalid", %{conn: conn} do
    conn = post conn, post_path(conn, :create), post: Map.put(@valid_attrs, :text, "")
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "renders a list of all posts", %{post_id: post_id} do
    conn = get conn, post_path(conn, :index)
    body = json_response(conn, 200)
    assert Enum.find(body, fn(x) -> x["id"] == post_id end)["user"]["name"] == "name"
  end
end
