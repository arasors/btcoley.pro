import React from "react"
import '../styles/tailwind.css'
import '../styles/globals.css'
import { wrapper, store } from "components/context/store";
import { Provider } from "react-redux";
import {SocketContext, socket} from "../components/socket/market";

function MyApp({Component, pageProps}) {

    return (
        <Provider store={store}>
            <SocketContext.Provider value={socket}>
                <Component {...pageProps}  />
            </SocketContext.Provider>
        </Provider>
    )
}

export default wrapper.withRedux(MyApp)
