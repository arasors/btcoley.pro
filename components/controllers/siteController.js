import {store,toggleTheme} from "components/context"
import {connect} from "../context";

export const switchTheme = () => {
    store.dispatch(toggleTheme());
}
export const setTheme = (props) => {
    store.dispatch({
        type: 'CUSTOM_THEME',
        theme: props.payload
    });
}

const mapStateToProps = state => {
    return {
        site: state.site,
    };
};
export default connect(mapStateToProps);