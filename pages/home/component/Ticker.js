import React,{memo, useState, useCallback,useMemo} from "react";
import {connect} from "components/context";
import {Translate, GetCurrentPrices, switchSelectPair} from "components/controllers";
import TickerData from "components/data/home/ticker";
import {Button, List, ListItem, ListItemButton} from "@mui/material";
import MarketTable from "./MarketTable";


const Ticker = memo(function Ticker(props){

    const [state, setState] = useState({
        marketDropdown: false,
        pair: props.site.current.pair,
        currencies: props.site.currencies
    });

    const handleSelectPair = useCallback( () => {
        setState(({
            ...state,
            marketDropdown: !state.marketDropdown
        }));
    },[state.marketDropdown]);

    const currencies = useMemo(function () {
        let filter = Object.entries(state.currencies).filter((item) => item[0] === state.pair);
        return filter.length>0 && filter[0].length>0 && filter[0][1];
    },[state.currencies, state.pair]);

    // TODO: CURRENCIES TRY GELMİYOR USD GELİYOR
    // console.log(currencies,state.pair,state.currencies);

        return(
            <section id="ticker">
                <Button variant="text" id="pair" onClick={() => handleSelectPair()}>
                    <span>{state.pair}</span>
                </Button>
                <List id="items">
                    {TickerData && TickerData.map((item,key) => {
                        return <TickerItem item={item} key={key} />
                    })}
                </List>


                {/*<div id="select-pair">*/}
                {/*    <MarketTable />*/}
                {/*</div>*/}
            </section>
        )

});


const TickerItem = memo(function TickerItem({item}){
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
    };
};
export default connect(mapStateToProps)(Ticker);