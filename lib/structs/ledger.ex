defmodule Ledger do
  @derive Jason.Encoder
  @enforce_keys [:name, :x, :y, :columns, :collection]

  @type t :: %__MODULE__{
          name: String.t(),
          x: integer,
          y: integer,
          columns: list,
          collection: String.t()
        }
  defstruct name: "", x: 0, y: 0, columns: [], collection: nil
end

defimpl Jason.Encoder, for: BSON.ObjectId do
  def encode(val, _opts \\ []) do
    BSON.ObjectId.encode!(val)
    |> Jason.encode!()
  end
end
