defmodule ApiWeb.PostView do
  use ApiWeb, :view

  def render("show.json", %{post: post}) do
    %{data: render_one(post, ApiWeb.PostView, "post.json")}
  end

  def render("post.json", %{post: post}) do
    %{
      id: post.id,
      user_id: post.user_id,
      text: post.text
    }
  end

  def render("index.json",%{results: results}) do
    Enum.map(results, fn(x) ->
      %{
        id: x.id,
        user_id: x.user_id,
        text: x.text
      }
    end)
  end
end
