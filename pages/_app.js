import React from "react"
import '../styles/tailwind.css'
import '../styles/globals.css'
import { wrapper, store } from "components/context/store";
import { Provider } from "react-redux";
import {SocketContext, socket} from "components/socket/socket";
import Page from "./Page"

function MyApp({Component, pageProps}) {

    return (
        <Provider store={store}>
            <SocketContext.Provider value={socket}>
                <Page {...pageProps} socket={socket}>
                    <Component {...pageProps} socket={socket}  />
                </Page>
            </SocketContext.Provider>
        </Provider>
    )
}

export default wrapper.withRedux(MyApp)
