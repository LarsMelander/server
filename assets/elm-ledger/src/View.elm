module View exposing (view)

import Browser
import Canvas.Msg as Msg
import Cells.Input.View
import Columns.View
import Common.ContextMenu as Menu
import Common.Functions exposing (px)
import Css
import Css.Global as Global
import Html exposing (div, table, td, th, tr)
import Html.Attributes exposing (id, style)
import Html.Styled as Styled
import Menu.Cell.View
import Menu.Column.View
import Menu.Row.View
import Model
import Rows.View


view : Model.Model -> Browser.Document Model.Msg
view model =
    { title = "Ledger: "
    , body = div [] []
    }
