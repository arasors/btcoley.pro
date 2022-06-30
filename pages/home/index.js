import Link from "next/link";
import cx from "classnames";
import {connect} from "react-redux";

function Home(props){

    return(
        <div className={cx({
            'flex flex-col flex-1 items-center justify-center font-bold': true,
            'text-slate-900': props.context?.theme==='light'
        })}>


        </div>
    )
}
const mapStateToProps = state => {
    return {
        context: state.site,
    };
};
export default connect(mapStateToProps)(Home);