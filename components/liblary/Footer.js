import cx from "classnames";
import {connect} from "react-redux";
import {Logo} from "./component/Logo";

function Footer(props){
    return(
        <footer>
            <Logo theme={props.site.theme} />
            <span className={'text-sm font-light select-none'}>2022</span>
        </footer>
    )
}
const mapStateToProps = state => {
    return {
        site: state.site,
    };
};
export default connect(mapStateToProps)(Footer);