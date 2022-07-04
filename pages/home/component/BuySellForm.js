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


class BuySellForm extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        tab: "AL"
    }

    componentDidMount() {

    }



    handleUpdateTab = (e) => {
        if(this.state.tab===e) return false;
        this.setState({tab: e});
    }


    render() {
        return (
            <section id="buy-sell">
                <ToggleButtonGroup
                    value={this.state.tab || 'AL'}
                    id="tab"
                    onChange={(e) => this.handleUpdateTab(e.target.value)}
                    aria-label="outlined button group">
                    <ToggleButton value="AL">{Translate('buysell_form_al')}</ToggleButton>
                    <ToggleButton value="SAT">{Translate('buysell_form_sat')}</ToggleButton>
                </ToggleButtonGroup>



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
export default connect(mapStateToProps)(BuySellForm);