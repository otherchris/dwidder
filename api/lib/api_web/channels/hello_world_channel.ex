defmodule ApiWeb.HelloWorldChannel do
  use Phoenix.Channel

  def join("hello_world:message", _message, socket) do
    send(self(), :after_join)
    {:ok, socket}
  end

  def handle_info(:after_join, socket) do
    push(socket, "world", %{})
    {:noreply, socket}
  end

end
