defmodule Api.PostTest do
  use ExUnit.Case

  alias ApiWeb.Post
  @valid_attrs %{user_id: "1234", text: "This is a post."}

  test "changeset with valid attributes" do
    changeset = Post.changeset(%Post{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with no user" do
    changeset = Post.changeset(%Post{}, Map.delete(@valid_attrs, :user_id))
    refute changeset.valid?
  end

  test "changeset with no text" do
    changeset = Post.changeset(%Post{}, Map.delete(@valid_attrs, :text))
    refute changeset.valid?
  end

  test "changeset with blank text" do
    changeset = Post.changeset(%Post{}, Map.put(@valid_attrs, :text, ""))
    refute changeset.valid?
  end
end
