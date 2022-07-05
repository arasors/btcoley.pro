import {CircularProgress} from "@mui/material";
import React,{memo} from "react";

export const Loader = memo(function Loader(){
    return(
        <div id="loader-1">
            <CircularProgress disableShrink />
        </div>
    )
})