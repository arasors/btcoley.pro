import React,{useEffect, memo, useState} from "react"
import {connect} from "react-redux";
import {useRouter} from 'next/router'
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Header from "components/liblary/Header";
import Footer from "components/liblary/Footer";
import {store, updateSite} from "components/context";
import {themeClassExits} from "components/functions";
import {Loader} from "components/liblary";
import {permission} from "components/data";
import Login from "./auth/login";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const Main = memo(function Main({site, socket, children}){

    useEffect(() => {

        socket.on("message", d => {
            store.dispatch(updateSite({
                ...site,
                currencies: d.currencies,
                filters: d.filters
            }));
        });

        themeClassExits(site.theme);
    }, [site]);

    const routePath = useRouter();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(false);
        setTimeout(() => {
            setLoaded(true);
        },300);
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


    const { user } = site;

    const permissionCheck = permission.filter(item => item.require===true && routePath.pathname.includes(item.pathname));
    if(!user.isLogin && permissionCheck.length>0){
        children = <Login />;
    }


    return (
        <ColorModeContext.Provider value={site?.theme || 'dark'}>
            <ThemeProvider theme={theme}>
                <main>
                    <Header/>
                    {!loaded && <Loader />}
                    {children}
                    {!routePath.pathname.includes("auth") && <Footer/>}
                </main>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
})

const mapStateToProps = state => {
    return {
        site: state.site,
    };
};
export default connect(mapStateToProps)(Main);