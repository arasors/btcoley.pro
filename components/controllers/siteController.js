import {store, toggleTheme} from "components/context"

export const switchTheme = () => {
    store.dispatch(toggleTheme());
}
export const setTheme = (props) => {
    store.dispatch({
        type: 'CUSTOM_THEME',
        theme: props.payload
    });
}
