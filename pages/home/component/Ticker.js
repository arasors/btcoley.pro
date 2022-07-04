import {Component} from "react";
import {connect} from "components/context";
import {Translate,GetCurrentPrices} from "components/controllers";
import SimpleDialogDemo from "./SelectMarketDialog";

class Ticker extends Component{
    constructor(props) {
        super(props);
    }

    state = {

    }

    render() {
        return(
            <section id="ticker">

                <div className="item">
                    <span>{this.props.site.current.pair}</span>
                </div>

                <div className="item">
                    <span><SimpleDialogDemo /></span>
                </div>

                <div className="item">
                    <span>{Translate('ticker_son_fiyat')}</span>
                    <span>
                        <GetCurrentPrices type={'ask'} data={'px'} />
                    </span>
                </div>

            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        site: state.site,
        market: state.market,
        order: state.order
    };
};
export default connect(mapStateToProps)(Ticker);