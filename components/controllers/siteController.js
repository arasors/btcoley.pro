import {store, useSelector, toggleTheme, toggleSelectPair} from "components/context"

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

export function GetCurrentCurrency({ret}){
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

export function GetCurrentPrices({type = false,data = false,ch = "order",calc = false, decimal = 2}){

    const pair = useSelector(state => state.site.current.pair);
    const orders = useSelector(state => state.order);
    const markets = useSelector(state => state.market);

    const order = () => {
        let filter = Object.entries(orders).filter((item) => item[0] === pair);
        return filter.length>0 && filter[0].length>0 && filter[0][1];
    }
    const market = () => {
        let filter = Object.entries(markets).filter((item) => item[0] === pair);
        return filter.length>0 && filter[0].length>0 && filter[0][1];
    }
    // TODO: MARKET VERİSİNİ SEÇEMİYOR
    if(calc!==false){
        switch (calc) {
            case 'ticker_24saat_degisim': return (parseFloat(Object(market())['low'] || 1)/parseFloat(Object(market())['high'] || 1)).toFixed(+decimal) + "%";
        }
    }
    if(ch==="market") return parseFloat(Object(market())[type || 'ask']).toFixed(+decimal);

    let ret = Object(Object(order()[type || 'ask'])[0])[data || 'px'];
    return isNaN(parseFloat(ret)) ? isNaN(ret) ? "0.0" : ret || 0 : parseFloat(ret).toFixed(+decimal);

}
export function GetBuySellFark(props){
    const orders = useSelector(state => state.order);
    const order = () => {
        let filter = Object.entries(orders).filter((item) => item[0] === props.pair);
        return filter.length>0 && filter[0].length>0 && filter[0][1];
    }

    return order() && (Math.abs(parseFloat(order()['bid'][0]['px'])-parseFloat(order()['ask'][0]['px'])) || 0).toFixed(4);
}