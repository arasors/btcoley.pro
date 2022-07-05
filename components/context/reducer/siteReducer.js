const initialState = {
    theme: 'dark',
    language: 'TR',
    currencies: {},
    filters: {},
    user: {
        isLogin: false,
        favorites: []
    },
    current: {
        pair: 'BTC/TRY',
        tab: 'TRY',
        marketDropdown: false
    }
};

function siteReducer(state = initialState, action){
    let data;
    switch (action.type){
        case "TOGGLE_THEME":
            data = {
                ...state,
                theme: state.theme === 'light' ? 'dark' : 'light'
            };
            return data;
        case "CUSTOM_THEME":
            data = {
                ...state,
                theme: action.theme
            };
            return data;
        case "UPDATE_LANGUAGE":
            data = {
                ...state,
                language: action.value
            };
            return data;
        case "UPDATE_SITE":
            data = {
                ...state,
                ...action.payload
            };
            return data;

        default: return state;
    }
};

export default siteReducer;
