defmodule ApiWeb.Post do
  @moduledoc """
  Model for post
  """
  alias Api.Repo
  use Ecto.Schema

  import Ecto.Changeset

  schema "posts" do
    field :text, :string
    belongs_to :user, ApiWeb.User

    timestamps
  end

  @required_fields ~w(user_id text)
  @optional_fields ~w()

  @doc """
  Creates a changeset based on the `model` and `params`.

  If no params are provided, an invalid changeset is returned
  with no validation performed.
  """
  def changeset(model, params \\ :empty) do
    model
    |> cast(params, @required_fields, @optional_fields)
    |> validate_required(:user_id)
    |> validate_required(:text)
    |> validate_length(:text, [1])
  end
end
