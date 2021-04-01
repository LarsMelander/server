import { Elm } from "../elm-db/src/Main.elm"

let clientDb = (channel) => {
    console.log("CONNECTED")

    const app = Elm.Main.init()

    app.ports.loadLedgers.subscribe(() => {
        channel.push("load_ledgers", {})
    })

    channel.on("load_ledgers_do", data => {
        console.log("All ledgers:")
        console.log(data)
        app.ports.loadLedgersDo.send(data.payload)
    })

    app.ports.createLedger.subscribe(data => {
        channel.push("create_ledger", data)
    })

    channel.on("create_ledger_do", data => {
        console.log("New ledger:")
        console.log(data)
        app.ports.createLedgerDo.send(data)
    })

    app.ports.updateLedgerPosition.subscribe(data => {
        channel.push("update_ledger_position", data)
    })

    channel.on("update_ledger_position_do", data => {
        console.log("Update position:")
        console.log(data)
        app.ports.updateLedgerPositionDo.send(data)
    })

    app.ports.renameLedger.subscribe(data => {
        channel.push("rename_ledger", data)
    })

    channel.on("rename_ledger_do", data => {
        console.log("Rename ledger:")
        console.log(data)
        app.ports.renameLedgerDo.send(data)
    })

    app.ports.deleteLedger.subscribe(data => {
        channel.push("delete_ledger", data)
    })

    channel.on("delete_ledger_do", data => {
        console.log("Delete ledger:")
        console.log(data)
        app.ports.deleteLedgerDo.send(data.key)
    })

    channel.on("addColumnDo", data => {
        console.log("Add column:")
        console.log(data)
        // app.ports.addColumnDo.send(data)
    })

    channel.on("renameColumnDo", data => {
        console.log("Rename column:")
        console.log(data)
        // app.ports.renameColumnDo.send(data)
    })

    channel.on("deleteColumnDo", data => {
        console.log("Delete column:")
        console.log(data)
        // app.ports.deleteColumnDo.send(data)
    })

    app.ports.addChildLedger.subscribe(data => {
        channel.push("add_child_ledger", data)
    })

    app.ports.openLedger.subscribe(key => {
        window.open("/ledger/" + key)
    })

    app.ports.selectId.subscribe(id => {
        window.requestAnimationFrame(() => {
            document.getElementById(id).select()
        })
    })

}

export default clientDb
