import {useState, memo, useCallback} from "react";
import Chart from "./component/Chart";
import Orders from "./component/Orders";
import {connect} from "components/context";
import {ToggleButton, ToggleButtonGroup} from "@mui/material";
import {GetBuySellFark, GetCurrentCurrency, Translate} from "components/controllers";

const Centre = memo(function Centre(props) {

    const [state, setState] = useState({
        tab: "orders"
    });

    const handleUpdateTab = useCallback((e) => {
        setState({tab: e});
    });

    return (
        <section id="centre">
            <Chart/>
            <div id="tab-wrapper">
                <ToggleButtonGroup
                    value={state.tab || 'orders'}
                    id="tab"
                    onChange={(e) => handleUpdateTab(e.target.value)}
                    aria-label="outlined button group">
                    <ToggleButton value="orders">{Translate('centre_tabs_orders')}</ToggleButton>
                    <ToggleButton value="transactions">{Translate('centre_tabs_emirler')}</ToggleButton>
                </ToggleButtonGroup>
                {state.tab === 'orders' && <div id="fark">
                    <span>{Translate('orders_alis_satis_farki')}</span>
                    <span>:</span>
                    <span><GetBuySellFark pair={props.site.current.pair}/> <GetCurrentCurrency ret="sell"/></span>
                </div>}

            </div>
            {state.tab === 'orders' && <Orders/>}
        </section>
    )
});

const mapStateToProps = state => {
    return {
        site: state.site
    };
};
export default connect(mapStateToProps)(Centre);