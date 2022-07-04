import React from "react"
import {useSelector} from "react-redux";

const SelectPair = React.memo(function SelectPair(){

    const market = useSelector(state => state.market);

    return(
        <div id="select-pair">
            <div className="select-pair">
                {market && Object.entries(market).map((item,key) => {

                    return(
                        <span className="px-4 py-2" key={key}>{item[0]}</span>
                    )
                })}
            </div>
        </div>
    )
});


export default SelectPair;