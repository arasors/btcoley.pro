import {store} from "../context";

export const resetOrder = () => {
    store.dispatch({
        type: 'RESET_ORDER_DATA',
        payload: {}
    });
}