import {Component} from "react";
import MarketTable from "./component/MarketTable";
import Ticker from "./component/Ticker";
import BuySellForm from "./component/BuySellForm";
import Centre from "./Centre";

export default class Home extends Component{

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }


    render() {
        return(
            <section id="home">
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