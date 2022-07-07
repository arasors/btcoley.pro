import React,{useEffect, memo, useState} from "react"
import {connect} from "react-redux";
import {useRouter} from 'next/router'
import cx from "classnames";
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';

import Header from "components/liblary/Header";
import Footer from "components/liblary/Footer";
import {store, updateSite} from "components/context";
import {themeClassExits} from "components/functions";
import {Loader} from "components/liblary";

import Market from "./market";
import Home from "./home";
import Auth from "./auth";


const ColorModeContext = React.createContext({ toggleColorMode: () => {} });



const Main = memo(function Main(props){

    useEffect(() => {

        props.socket.on("message", d => {
            store.dispatch(updateSite({
                ...props.site,
                currencies: d.currencies,
                filters: d.filters
            }));
        });

        themeClassExits(props.site.theme);
    }, [props]);

    const routePath = useRouter().asPath;
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(false);
        setTimeout(() => {
            setLoaded(true);
        },300);
    }, [routePath]);


    const RoutePage = memo(function RoutePage({path}){
       switch (path){
           case '/pro':
               return <Market />;
           case '/hesabim':
               return <Auth path={path} />;
           case '/auth/giris-yap':
               return <Auth path={path} />;

           default: return <Home />;
       }
    });


    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode: props.site.theme,
                },
            }),
        [props.site.theme],
    );


    return (
        <ColorModeContext.Provider value={props.site.theme}>
            <ThemeProvider theme={theme}>
                <main>
                    <Header/>
                        {!loaded && <Loader />}
                        <RoutePage path={routePath} />
                    {!routePath.includes("auth") && <Footer/>}
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