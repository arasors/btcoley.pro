import {Component} from "react";
import {ToggleButton, ToggleButtonGroup} from "@mui/material";

export default class MarketTable extends Component{
    constructor(props) {
        super(props);
    }

    state = {
        tab: "web"
    }

    render() {
        return(
            <section id="market-table">
                <ToggleButtonGroup
                    value={this.state.tab}
                    id="tab"
                    onChange={(e) => this.setState({tab: e.target.value})}
                >
                    <ToggleButton value="try">TRY</ToggleButton>
                    <ToggleButton value="usdt">USDT</ToggleButton>
                    <ToggleButton value="hepsi">HEPSİ</ToggleButton>
                </ToggleButtonGroup>

                <div id="search">

                </div>


            </section>
        )
    }
}