import cx from "classnames";
import {connect} from "react-redux";

function Footer(props){
    return(
        <div className={cx({
            'flex justify-between w-full px-2 py-2 items-center border-t border-solid': true,
            [props.context?.defaultClass.background.light || '']: props.context?.theme==='light',
            [props.context?.defaultClass.background.dark || '']: props.context?.theme==='dark',
            [props.context?.defaultClass.border.light || '']: props.context?.theme==='light',
            [props.context?.defaultClass.border.dark || '']: props.context?.theme==='dark',
        })}>
            <span>Footer</span>
            <span className={'text-sm'}>copyright</span>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        context: state.site,
    };
};
export default connect(mapStateToProps)(Footer);