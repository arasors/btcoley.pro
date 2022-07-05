import React,{Component} from "react";
import {connect} from "components/context";
import {Translate,GetCurrentPrices} from "components/controllers";
import SelectPair from "./SelectPair";
import TickerData from "components/data/home/ticker";
import {List, ListItem, ListItemButton} from "@mui/material";

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
                <List id="items">
                    {TickerData && TickerData.map((item,key) => {
                        return <TickerItem item={item} key={key} />
                    })}
                </List>
            </section>
        )
    }
}


const TickerItem = React.memo(function TickerItem({item}){
    switch (item){
        case "ticker_son_fiyat":
            return (
                <ListItem className="item">
                    <ListItemButton className="item-button">
                        <span>{Translate('ticker_son_fiyat')}</span>
                        <span>
                        <GetCurrentPrices type={'ask'} data={'px'}/>
                        </span>
                    </ListItemButton>
                </ListItem>
                );
        case "ticker_24saat_hacim":
            return (
                <ListItem className="item">
                    <ListItemButton className="item-button">
                        <span>{Translate('ticker_24saat_hacim')}</span>
                        <span>
                            <GetCurrentPrices type="volume" ch="market" />
                        </span>
                    </ListItemButton>
                </ListItem>
                );
        case "ticker_24saat_degisim":
            return (
                <ListItem className="item">
                    <ListItemButton className="item-button">
                        <span>{Translate('ticker_24saat_degisim')}</span>
                        <span>
                            <GetCurrentPrices type="volume" ch="market" calc="ticker_24saat_degisim" />
                        </span>
                    </ListItemButton>
                </ListItem>
                );
        case "ticker_24saat_yuksek":
            return(
                <ListItem className="item">
                    <ListItemButton className="item-button">
                        <span>{Translate('ticker_24saat_yuksek')}</span>
                        <span>
                            <GetCurrentPrices type="high" ch="market" />
                        </span>
                    </ListItemButton>
                </ListItem>
                )
        case "ticker_24saat_dusuk":
            return (
                <ListItem className="item">
                    <ListItemButton className="item-button">
                        <span>{Translate('ticker_24saat_dusuk')}</span>
                        <span>
                            <GetCurrentPrices type="low" ch="market" decimal="2" />
                        </span>
                    </ListItemButton>
                </ListItem>
                );
        case "ticker_en_iyi_alis":
            return(
                <ListItem className="item">
                    <ListItemButton className="item-button">
                        <span>{Translate('ticker_en_iyi_alis')}</span>
                        <span>
                            <GetCurrentPrices type="bid" data="px" />
                        </span>
                    </ListItemButton>
                </ListItem>
                );
        case "ticker_en_iyi_satis":
            return(
                <ListItem className="item">
                    <ListItemButton className="item-button">
                        <span>{Translate('ticker_en_iyi_satis')}</span>
                        <span>
                            <GetCurrentPrices type="ask" data="px" />
                        </span>
                    </ListItemButton>
                </ListItem>
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