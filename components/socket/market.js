import React from "react";
import socketio from "socket.io-client";
import {store,marketAction,orderAction} from "../context"

const SOCKET_URL = process.env.WSS_HOST;
export const SocketContext = React.createContext();

export const socket = socketio.connect(SOCKET_URL, {transports: ["websocket"]});

socket.on("ticker", d => {
    store.dispatch(marketAction({
        [d[0]]: d[1]
    }));
    // console.log(d);
});

socket.on("orderbook", d => {
    let i = 1;

    if(i===1){
        // console.log(d);
        i++;
    }

    // let key = d[0].split('-');

    // store.dispatch(orderAction({
    //     [key[1]]: {
    //         [key[0]]: d[1]
    //     }
    // }));
    // console.log(d);
});

export const useSocket = () => React.useContext(SocketContext);
