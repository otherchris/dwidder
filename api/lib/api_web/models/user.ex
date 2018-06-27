defmodule ApiWeb.User do
  @moduledoc """
  User model
  """
  use Ecto.Schema

  import Ecto.Changeset
  alias Api.Repo
  alias Ecto.Changeset

  @valid_email_regex ~r/\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i
  schema "users" do
    field :name, :string
    field :email, :string
    field :password_hash, :string
    field :password, :string, virtual: true

    timestamps
  end

  def changeset(model, params \\ :empty) do
    model
    |> cast(params, ~w(email name), [])
    |> validate_required(:email)
    |> validate_required(:name)
    |> validate_length(:email, min: 3, max: 255)
    |> validate_format(:email, @valid_email_regex)
  end

  def registration_changeset(model, params \\ :empty) do
    model
    |> changeset(params)
    |> cast(params, ~w(password), [])
    |> validate_length(:password, min: 6)
    |> put_password_hash
  end

  defp put_password_hash(changeset) do
    case changeset do
      %Changeset{valid?: true, changes: %{password: pass}} ->
        put_change(changeset, :password_hash, Bcrypt.hash_pwd_salt(pass))
      _ ->
        changeset
    end
  end
end
