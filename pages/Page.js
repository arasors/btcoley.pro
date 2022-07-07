import React, {useEffect, memo, useState} from "react"
import {connect} from "react-redux";
import {useRouter} from 'next/router'
import {ThemeProvider, createTheme} from '@mui/material/styles';
import Head from 'next/head';

import Header from "components/liblary/Header";
import Footer from "components/liblary/Footer";
import {store, updateSite} from "components/context";
import {themeClassExits} from "components/functions";
import {Loader} from "components/liblary";
import {permission} from "components/data";
import Login from "./auth/login";
import Account from "./account";
import socketio from "socket.io-client";
import {SOCKET_URL} from "components/socket/socket";

const ColorModeContext = React.createContext({
    toggleColorMode: () => {
    }
});

const Main = memo(function Main({site, socket, children}) {

    useEffect(() => {

        socket.on("message", d => {
            store.dispatch(updateSite({
                ...site,
                currencies: d.currencies,
                filters: d.filters
            }));
        });


        if(site.user.isLogin===true){
            // socket.on("message", d => {
            //     store.dispatch(updateSite({
            //         ...site,
            //         currencies: d.currencies,
            //         filters: d.filters
            //     }));
            // });
            const userSocket = socketio.connect(SOCKET_URL, {
                transports: ["websocket"],
                auth: {
                    token: site.user.token,
                    id: site.user.id
                }
            });

            userSocket.on("connect", d => {


                // console.log(d,site.user.token, site.user.id);
            });
            userSocket.on("disconnect", c => {
                // console.log("bağlantı koptu", c);
            });



        }






        themeClassExits(site.theme);
    }, [site]);

    const routePath = useRouter();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(false);
        setTimeout(() => {
            setLoaded(true);
        }, 300);
    }, [routePath]);


    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode: site?.theme || 'dark',
                },
            }),
        [site?.theme],
    );


    const {user} = site;

    const permissionCheck = permission.filter(item => item.require === true && routePath.pathname.includes(item.pathname));
    if (permissionCheck.length > 0 && !user.isLogin) {
        children = <Login/>;
    }

    if (user.isLogin === true) {
        if (routePath.pathname === "/auth/login" || routePath.pathname === "/auth/register") children = <Account/>
    }


    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&Roboto:300,400,500,700&display=swap" rel="stylesheet" />
            </Head>
            <ColorModeContext.Provider value={site?.theme || 'dark'}>
                <ThemeProvider theme={theme}>
                    <main>
                        <Header/>
                        {!loaded && <Loader/>}
                        {children}
                    </main>
                </ThemeProvider>
            </ColorModeContext.Provider>
        </>

    )
})

const mapStateToProps = state => {
    return {
        site: state.site,
    };
};
export default connect(mapStateToProps)(Main);