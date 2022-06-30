const initialState = {
    theme: 'light',
    language: 'TR',
    currencies: {},
    defaultClass: {
        background: {
            light: 'bg-slate-200 text-slate-900',
            dark: 'bg-slate-900 text-slate-100'
        },
        border: {
            light: 'border-slate-300',
            dark: 'border-slate-700'
        },
        divide: {
            light: 'divide-slate-300',
            dark: 'divide-slate-700'
        }
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
