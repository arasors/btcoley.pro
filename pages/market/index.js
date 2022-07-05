import React,{Component, memo} from "react";
import MarketTable from "./component/MarketTable";
import Ticker from "./component/Ticker";
import BuySellForm from "./component/BuySellForm";
import Centre from "./Centre";

class Market extends Component{

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }


    render() {
        return(
            <section id="market">
                <Ticker />
                <section id="advanced">
                    <MarketTable />
                    <Centre />
                    <BuySellForm />
                </section>
            </section>
        )
    }

}

export default memo(Market);