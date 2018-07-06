defmodule ApiWeb.PostView do
  use ApiWeb, :view

  def render("show.json", %{post: post}) do
    %{data: render_one(post, ApiWeb.PostView, "post.json")}
  end

  def render("post.json", %{post: post}) do
    %{
      id: post.id,
      text: post.text,
      user: %{
        name: post.user.name,
        id: post.user.id
      }
    }
  end

  def render("index.json", %{results: results}) do
    Enum.map(results, fn(x) ->
      %{
        id: x.id,
        text: x.text,
        user: %{
          name: x.user.name,
          id: x.user.id
        }
      }
    end)
  end
end
