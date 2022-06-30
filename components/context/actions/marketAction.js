export function marketAction(payload = ""){

    return{
        type: 'UPDATE_MARKET_DATA',
        payload: payload
    }

}
