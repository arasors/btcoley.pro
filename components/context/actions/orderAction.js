export function orderAction(payload = {}){
    // console.log(payload);
    return{
        type: 'UPDATE_ORDER_DATA',
        payload
    }

}
