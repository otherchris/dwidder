defmodule Api.Repo.Migrations.CreatePost do
  use Ecto.Migration

  def change do
    create table(:posts) do
      add :user_id, references(:users, on_delete: :nothing)
      add :text, :string

      timestamps()
    end

    create index(:posts, [:user_id])
  end
end
