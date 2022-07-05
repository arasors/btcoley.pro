import {Component} from "react";
import {connect, store, updateSite} from "components/context";
import {
    Paper,
    ToggleButton,
    ToggleButtonGroup,
    IconButton,
    InputBase,
    Tooltip,
    ButtonGroup,
    Button
} from "@mui/material";
import {Translate} from "components/controllers";
import cx from "classnames"
import {RiCloseFill} from "@react-icons/all-files/ri/RiCloseFill";
import {TiStar} from "@react-icons/all-files/ti/TiStar";
import SonucBulunamadi from "components/liblary/component/SonucBulunamadi";


class Chart extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        loaded: false
    }

    componentDidMount() {

    }



    handleUpdateTab = (e) => {
        if(this.state.tab===e) return false;
        this.setState({tab: e});
    }


    render() {
        return (
            <section id="chart">
                {/*{this.state.loaded && (*/}
                {/*    <TradingViewWidget*/}
                {/*        symbol={this.props.site.current.pair.replace("/", "") ?? "BTCTRY"}*/}
                {/*        hide_top_toolbar={false}*/}
                {/*        hide_side_toolbar={false}*/}
                {/*        withdateranges={false}*/}
                {/*        allow_symbol_change={false}*/}
                {/*        theme={this.props.site.theme === "light" ? "Light" : "Dark"}*/}
                {/*        locale="tr"*/}
                {/*        autosize*/}
                {/*    />*/}
                {/*)}*/}
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        site: state.site,
        market: state.market
    };
};
export default connect(mapStateToProps)(Chart);