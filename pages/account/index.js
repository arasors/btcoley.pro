import React, {memo, useEffect, useState} from "react"
import {connect} from "components/context";
import {Translate} from "components/controllers";
import {useRouter} from 'next/router'
import {Card, Paper, Typography} from "@mui/material";

const Account = memo(function Account(props) {

    const [state, setState] = useState({
        tab: 1
    });

    const router = useRouter();


    return (
        <section id="account" className="inner-page">
            <div id="sidebar">
                <Typography variant="h4" gutterBottom component="div" id="title">
                    {props.site.user.name.toLocaleUpperCase('TR')}
                </Typography>
            </div>
            <div id="content">

            </div>
        </section>
    )
});


const mapStateToProps = state => {
    return {
        site: state.site,
    };
};
export default connect(mapStateToProps)(Account);