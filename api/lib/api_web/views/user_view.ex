defmodule ApiWeb.UserView do
  use ApiWeb, :view

  def render("show.json", %{user: user}) do
    %{data: render_one(user, ApiWeb.UserView, "user.json")}
  end

  def render("user.json", %{user: user}) do
    %{
      id: user.id,
      email: user.email,
      name: user.name
    }
  end
end
