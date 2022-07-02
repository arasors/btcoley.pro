import cx from "classnames";
import {connect} from "react-redux";
import {Logo} from "./component/Logo";
import {Tooltip} from "@mui/material";

function Footer(props){
    return(
        <footer>
            <Logo theme={props.site.theme} />

            <Tooltip title="Online">
                <div className="flex items-center justify-center gap-1">
                    <span className="bg-success w-3 h-3 rounded-full"></span>
                    <span className={'text-xs font-light select-none pt-0.5'}>Online</span>
                </div>
            </Tooltip>


        </footer>
    )
}
const mapStateToProps = state => {
    return {
        site: state.site,
    };
};
export default connect(mapStateToProps)(Footer);