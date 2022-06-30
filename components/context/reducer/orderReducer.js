const initialState = {};

export default function orderReducer(state = initialState, action){
    let data;
    switch (action.type){
        case "UPDATE_ORDER_DATA":
            data = {
                ...state,
                ...action.payload
            };
            return data;
        case "RESET_ORDER_DATA":
            data = {};
            return data;

        default: return state;
    }
};

