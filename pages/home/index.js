import {Component} from "react";
import MarketTable from "./component/MarketTable";
import Ticker from "./component/Ticker";

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
                </section>
            </section>
        )
    }


}