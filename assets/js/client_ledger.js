import clientLedger from "./routes_ledger"

import socket from "./socket"

let ledger_channel = socket.channel("ledger:*", {})

ledger_channel.join()
    .receive("ok", resp => {
        console.log("Joined successfully", resp)
        clientLedger(ledger_channel)
    })
    .receive("error", resp => { console.log("Unable to join", resp) })
    .receive("timeout", () => console.log("Networking issue. Still waiting..."))
