defmodule Api.UserTest do
  use ExUnit.Case

  alias ApiWeb.User

  @valid_attrs %{name: "name", email: "bar@baz.com", password: "s3cr3t"}

  test "changeset with valid attributes" do
    changeset = User.changeset(%User{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset, email empty string" do
    changeset = User.changeset(
      %User{}, Map.put(@valid_attrs, :email, "")
    )
    refute changeset.valid?
  end

  test "changeset, name is null" do
    changeset = User.changeset(
      %User{}, Map.delete(@valid_attrs, :name)
    )
    refute changeset.valid?
  end

  test "changeset, email invalid format" do
    changeset = User.changeset(
      %User{}, Map.put(@valid_attrs, :email, "foo.com")
    )
    refute changeset.valid?
  end

  test "registration_changeset" do
    changeset = User.registration_changeset(%User{}, @valid_attrs)
    assert changeset.changes.password_hash
    assert changeset.valid?
  end

  test "registration_changeset, password too short" do
    changeset = User.registration_changeset(
      %User{}, Map.put(@valid_attrs, :password, "12345")
    )
    refute changeset.valid?
  end
end
