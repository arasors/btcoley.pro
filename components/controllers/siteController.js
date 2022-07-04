import {store,useSelector, toggleTheme} from "components/context"

export const switchTheme = () => {
    store.dispatch(toggleTheme());
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

export function GetBuySellFark(props){
    const orders = useSelector(state => state.order);
    const order = () => {
        let filter = Object.entries(orders).filter((item) => item[0] === props.pair);
        return filter.length>0 && filter[0].length>0 && filter[0][1];
    }

    return order() && (Math.abs(parseFloat(order()['bid'][0]['px'])-parseFloat(order()['ask'][0]['px'])) || 0).toFixed(4);
}