import {Component} from "react";
import {connect} from "components/context";
import {Translate,GetCurrentPrices} from "components/controllers";
import SelectPair from "./SelectPair"

class Ticker extends Component{
    constructor(props) {
        super(props);
    }

    state = {
        selector: false
    }

    render() {
        return(
            <section id="ticker">


                {this.state.selector===true && <SelectPair />}

                <div id="pair">
                    <span>{this.props.site.current.pair}</span>
                </div>

                <div id="items">

                    <div className="item">
                        <span>{Translate('ticker_son_fiyat')}</span>
                        <span>
                            <GetCurrentPrices type={'ask'} data={'px'} />
                        </span>
                    </div>
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