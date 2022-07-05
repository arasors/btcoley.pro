import {store, useSelector, toggleTheme, toggleSelectPair} from "components/context"
import {memo, useMemo} from "react";

export const switchTheme = () => {
    store.dispatch(toggleTheme());
}
export const switchSelectPair = () => {
    store.dispatch(toggleSelectPair());
}
export const setTheme = (props) => {
    store.dispatch({
        type: 'CUSTOM_THEME',
        theme: props.payload
    });
}

export const GetCurrentCurrency = memo(function GetCurrentCurrency({ret}){
        const currency = useSelector(state => state.site?.current?.pair) || 'BTC/TRY';
        const currencySplit = currency.split('/');
        const data = {
            buy: currencySplit[0],
            sell: currencySplit[1],
            clean: currencySplit[0]+currencySplit[1],
            reverse: currencySplit[1]+currencySplit[0]
        };

        return Object(data)[ret];
    }
)

export const GetCurrentPrices = memo(function GetCurrentPrices({type = false,data = false,ch = "order",calc = false, decimal = false}){

    const site = useSelector(state => state.site),
          pair = site.current.pair;
    const orders = useSelector(state => state.order);
    const markets = useSelector(state => state.market);



    const currencies = useMemo(function () {
        let filter = Object.entries(site.currencies).filter((item) => item[0] === pair);
        return filter.length>0 && filter[0].length>0 && filter[0][1];
    },[site,pair]);


    const order = useMemo(function () {
        let filter = Object.entries(orders).filter((item) => item[0] === pair);
        return filter.length>0 && filter[0].length>0 && filter[0][1];
    },[orders,pair]);

    const market = useMemo(function () {
        let filter = Object.entries(markets).filter((item) => item[0] === pair);
        return filter.length>0 && filter[0].length>0 && filter[0][1];
    },[markets,pair]);

    if(calc!==false){
        switch (calc) {
            case 'ticker_24saat_degisim': return (parseFloat(Object(market)['low'] || 1)/parseFloat(Object(market)['high'] || 1)).toFixed(+decimal || currencies.display_decimals) + "%";
        }
    }
    if(ch==="market") return parseFloat(Object(market)[type || 'ask']).toFixed(+decimal || currencies.display_decimals);

    let ret = Object(Object(order[type || 'ask'])[0])[data || 'px'];
    return isNaN(parseFloat(ret)) ? isNaN(ret) ? "0.0" : ret || 0 : parseFloat(ret).toFixed(+decimal || currencies.display_decimals);
})


export const GetBuySellFark = memo(function GetBuySellFark(props){
    const orders = useSelector(state => state.order);
    const order = useMemo(function () {
        let filter = Object.entries(orders).filter((item) => item[0] === props.pair);
        return filter.length>0 && filter[0].length>0 && filter[0][1];
    },[orders,props.pair]);

    return order && (Math.abs(parseFloat(order['bid'][0]['px'])-parseFloat(order['ask'][0]['px'])) || 0).toFixed(4);
});