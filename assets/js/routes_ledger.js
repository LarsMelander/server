import { Elm } from "../elm-ledger/src/Main.elm"

let clientLedger = (channel) => {
    console.log("CONNECTED")

    const app = Elm.Main.init()

    app.ports.loadLedger.subscribe(key => {
        channel.push("load_ledger", key)
    })

    channel.on("get_ledger_name_do", data => {
        console.log("Ledger name:")
        console.log(data)

        app.ports.getLedgerNameDo.send(data)
    })

    channel.on("load_columns_do", data => {
        console.log("ColumnData:")
        console.log(data)

        app.ports.loadColumnsDo.send(data.columns)
        app.ports.loadParentColumnsDo.send(data.parentLedger)
    })

    channel.on("add_row_do", data => {
        console.log("New row:")
        console.log(data)

        app.ports.addRowDo.send(data)
    })

    app.ports.addColumn.subscribe(data => {
        channel.push("add_column", data)
    })

    channel.on("add_column_do", data => {
        console.log("New column:")
        console.log(data)

        app.ports.addColumnDo.send(data)
    })

    app.ports.renameColumn.subscribe(data => {
        console.log("Column name:")
        console.log(data)

        channel.push("rename_column", data)
    })

    channel.on("rename_column_do", data => {
        console.log("New column name:")
        console.log(data)

        app.ports.renameColumnDo.send(data)
    })

    app.ports.setColumnWidth.subscribe(data => {
        channel.push("set_column_width", data)
    })

    app.ports.addRowAndCell.subscribe(data => {
        channel.push("add_row_and_cell", data)
    })

    app.ports.addColumnAndCell.subscribe(data => {
        channel.push("add_column_and_cell", data)
    })

    channel.on("add_column_and_cell_do", data => {
        console.log("New column amd cell:")
        console.log(data)

        app.ports.addColumnAndCellDo.send(data)
    })

    app.ports.addRowColumnAndCell.subscribe(data => {
        channel.push("add_row_column_and_cell", data)
    })

    app.ports.setCellValue.subscribe(data => {
        channel.push("set_cell_value", data)
    })

    app.ports.deleteColumn.subscribe(data => {
        channel.push("delete_column", data)
    })

    channel.on("delete_column_do", data => {
        console.log("Delete column:")
        console.log(data)

        app.ports.deleteColumnDo.send(data)
    })

    app.ports.deleteRow.subscribe(data => {
        channel.push("delete_row", data)
    })

    channel.on("add_parent_columns_do", data => {
        console.log("Add parent columns:")
        console.log(data)

        app.ports.loadParentColumnsDo.send(data)
    })

    channel.on("remove_parent_columns_do", () => {
        app.ports.removeParentColumnsDo.send(null)
    })

}

export default clientLedger
