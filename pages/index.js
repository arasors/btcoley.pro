import React,{useEffect, memo, useState} from "react"
import {connect} from "react-redux";
import {useRouter} from 'next/router'
import cx from "classnames";

import Header from "components/liblary/Header";
import Footer from "components/liblary/Footer";
import {store, updateSite} from "components/context";
import {themeClassExits} from "components/functions";
import {Loader} from "components/liblary";

import Market from "./market";
import Home from "./home";



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

           default: return <Home />;
       }
    });

    return (
        <main>
            <Header/>
                {!loaded && <Loader />}
                <RoutePage path={routePath} />
            <Footer/>
        </main>
    )
})

const mapStateToProps = state => {
    return {
        site: state.site,
    };
};
export default connect(mapStateToProps)(Main);