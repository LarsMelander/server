defmodule ServerWeb.Ledger.PageController do
    use ServerWeb, :controller

    plug :put_layout, "ledger.html"

    def index(conn, _params) do
        render(conn, "index.html")
    end
end