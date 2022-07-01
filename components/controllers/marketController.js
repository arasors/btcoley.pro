import {store} from "../context";

export const resetMarket = () => {
    store.dispatch({
        type: 'RESET_MARKET_DATA',
        payload: ''
    });
}