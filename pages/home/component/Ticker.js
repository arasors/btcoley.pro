import React,{Component} from "react";
import {connect} from "components/context";
import {Translate,GetCurrentPrices} from "components/controllers";
import SelectPair from "./SelectPair";
import TickerData from "components/data/home/ticker";

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
                    {TickerData && TickerData.map((item,key) => {
                        return <TickerItem item={item} key={key} />
                    })}
                </div>
            </section>
        )
    }
}


const TickerItem = React.memo(function TickerItem({item}){
    switch (item){
        case "ticker_son_fiyat":
            return (
                    <div className="item">
                        <span>{Translate('ticker_son_fiyat')}</span>
                        <span>
                        <GetCurrentPrices type={'ask'} data={'px'}/>
                        </span>
                    </div>
                );
        case "ticker_24saat_hacim":
            return (
                    <div className="item">
                        <span>{Translate('ticker_24saat_hacim')}</span>
                        <span>
                            <GetCurrentPrices type="volume" ch="market" />
                        </span>
                    </div>
                );
        case "ticker_24saat_degisim":
            return (
                    <div className="item">
                        <span>{Translate('ticker_24saat_degisim')}</span>
                        <span>
                            <GetCurrentPrices type="volume" ch="market" calc="ticker_24saat_degisim" />
                        </span>
                    </div>
                );
        case "ticker_24saat_yuksek":
            return(
                    <div className="item">
                        <span>{Translate('ticker_24saat_yuksek')}</span>
                        <span>
                            <GetCurrentPrices type="high" ch="market" />
                        </span>
                    </div>
                )
        case "ticker_24saat_dusuk":
            return (
                    <div className="item">
                        <span>{Translate('ticker_24saat_dusuk')}</span>
                        <span>
                            <GetCurrentPrices type="low" ch="market" decimal="2" />
                        </span>
                    </div>
                );
        case "ticker_en_iyi_alis":
            return(
                    <div className="item">
                        <span>{Translate('ticker_en_iyi_alis')}</span>
                        <span>
                            <GetCurrentPrices type="ask" data="px" />
                        </span>
                    </div>
                );
        case "ticker_en_iyi_satis":
            return(
                <div className="item">
                    <span>{Translate('ticker_en_iyi_satis')}</span>
                    <span>
                            <GetCurrentPrices type="bid" data="px" />
                        </span>
                </div>
                )
        default: return;
    }
})


const mapStateToProps = state => {
    return {
        site: state.site,
        market: state.market,
        order: state.order
    };
};
export default connect(mapStateToProps)(Ticker);