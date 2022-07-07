import {memo} from "react"
import {connect} from "components/context";

const Account = memo(function Account(props){

    return(
        <pre className="max-w-full">{JSON.stringify(props.site?.user, null, 4)}</pre>
    )
})

const mapStateToProps = state => {
    return {
        site: state.site,
    };
};
export default connect(mapStateToProps)(Account);