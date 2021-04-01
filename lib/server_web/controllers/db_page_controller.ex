defmodule ServerWeb.Db.PageController do
    use ServerWeb, :controller

    plug :put_layout, "db.html"

    def index(conn, _params) do
        render(conn, "index.html")
    end
end