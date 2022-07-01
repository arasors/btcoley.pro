import cx from "classnames";
import {connect} from "react-redux";

function Footer(props){
    return(
        <footer>
            <span>Footer</span>
            <span className={'text-sm'}>copyright</span>
        </footer>
    )
}
const mapStateToProps = state => {
    return {
        context: state.site,
    };
};
export default connect(mapStateToProps)(Footer);