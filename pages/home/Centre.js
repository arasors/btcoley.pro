import {Component} from "react";
import Chart from "./component/Chart";
import Orders from "./component/Orders";
import {connect} from "../../components/context";
import {ToggleButton, ToggleButtonGroup} from "@mui/material";
import {GetBuySellFark, GetCurrentCurrency, Translate} from "../../components/controllers";

class Centre extends Component{
    constructor(props) {
        super(props);
    }

    state = {
        tab: "orders"
    }

    handleUpdateTab = (e) => {
        this.setState({tab: e});
    }

    render() {
        return(
            <section id="centre">
                <Chart />
                <div id="tab-wrapper">
                    <ToggleButtonGroup
                        value={this.state.tab || 'orders'}
                        id="tab"
                        onChange={(e) => this.handleUpdateTab(e.target.value)}
                        aria-label="outlined button group">
                        <ToggleButton value="orders">{Translate('centre_tabs_orders')}</ToggleButton>
                        <ToggleButton value="transactions">{Translate('centre_tabs_emirler')}</ToggleButton>
                    </ToggleButtonGroup>
                    {this.state.tab==='orders' && <div id="fark">
                        <span>{Translate('orders_alis_satis_farki')}</span>
                        <span>:</span>
                        <span><GetBuySellFark pair={this.props.site.current.pair} /> <GetCurrentCurrency ret="sell" /></span>
                    </div>}

                </div>
                {this.state.tab==='orders' && <Orders />}
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        site: state.site,
        order: state.order
    };
};
export default connect(mapStateToProps)(Centre);