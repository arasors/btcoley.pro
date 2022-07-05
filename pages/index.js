import React,{useEffect, memo} from "react"
import {connect} from "react-redux";
import {useRouter} from 'next/router'
import cx from "classnames";

import Home from "./home";
import Header from "components/liblary/Header";
import Footer from "components/liblary/Footer";
import {store, updateSite} from "components/context";
import {themeClassExits} from "components/functions";


const Main = memo(function Main(props){

    const routes = useRouter().asPath;

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


    const RoutePage = memo(function RoutePage({path}){
       switch (path){
           case 'pro':
               <Home />

           default: <Home />;
       }
    });

    return (
        <main>
            <Header/>
                <Home />
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