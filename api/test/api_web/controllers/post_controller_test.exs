defmodule ApiWeb.PostControllerTest do
  use ApiWeb.ConnCase

  alias Api.Repo
  alias ApiWeb.User
  alias ApiWeb.Post

  @valid_attrs %{text: "this is a post"}

  setup %{conn: conn} do
    user_changeset = User.changeset(%User{}, %{email: "as@em.ail", password: "pwdded"})
    {:ok, %{id: user_id}} = Repo.insert(user_changeset)
    {:ok, conn: put_req_header(conn, "accept", "application/json"), user_id: user_id}
  end

  test "creates and renders resource when data is valid", %{conn: conn, user_id: user_id} do
    conn = post conn, post_path(conn, :create), post: Map.put(@valid_attrs, :user_id, user_id)
    body = json_response(conn, 201)
    assert body["data"]["id"]
    assert body["data"]["user_id"]
    assert body["data"]["text"]
    assert Repo.get_by(Post, id: body["data"]["id"])
  end

  test "does not create resource and renders errors when data is invalid", %{conn: conn} do
    conn = post conn, post_path(conn, :create), post: Map.put(@valid_attrs, :text, "")
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "renders a list of all posts" do
    conn = post conn, post_path(conn, :index)
    body = json_response(conn, 200)
    assert length(body["data"]["posts"]) == 1
  end
end
