import React from "react";
import socketio from "socket.io-client";
import {store, marketAction, orderAction, updateSite} from "../context"

const SOCKET_URL = process.env.WSS_HOST;
export const SocketContext = React.createContext();

export const socket = socketio.connect(SOCKET_URL, {transports: ["websocket"]});

// this.props.socket.on("message", d => {
//     store.dispatch(updateSite({
//         ...this.props.context,
//         currencies: d.currencies
//     }));
// });

socket.on("ticker", d => {
    store.dispatch(marketAction(d));
});

socket.on("orderbook", d => {
    store.dispatch(orderAction(d));
});

export const useSocket = () => React.useContext(SocketContext);
