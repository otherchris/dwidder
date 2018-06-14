defmodule ApiWeb.HelloWorldChannelTest do
  use ApiWeb.ChannelCase

  alias ApiWeb.HelloWorldChannel

  #setup do
  #{:ok, _, socket} =
  #socket("user_id", %{some: :assign})
  #|> subscribe_and_join(RoomChannel, "room:lobby")
  #
  #{:ok, socket: socket}
  #end

  test "get the hello world message on join" do
    {:ok, _, socket} =
      socket("user_id", %{some: :assign})
      |> subscribe_and_join(HelloWorldChannel, "hello_world:message")
    IO.inspect socket
  end
end
