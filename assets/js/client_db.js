import { Elm } from "../elm-db/src/Main.elm";
import clientDb from "./routes_db";

import socket from "./socket";

let ledgers_channel = socket.channel("ledgers", {});

ledgers_channel
  .join()
  .receive("ok", (resp) => {
    console.log("Joined successfully", resp);
    clientDb(ledgers_channel);
  })
  .receive("error", (resp) => {
    console.log("Unable to join", resp);
  })
  .receive("timeout", () => console.log("Networking issue. Still waiting..."));
