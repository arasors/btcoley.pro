const initialState = {};

export default function marketReducer(state = initialState, action){
    let data;
    switch (action.type){
        case "UPDATE_MARKET_DATA":
            data = {
                ...state,
                ...action.payload
            };
            return data;
        case "CUSTOM_MARKET_DATA":
            data = {
                ...action.payload
            };
            return data;
        case "RESET_MARKET_DATA":
            data = {};
            return data;

        default: return state;
    }
};

