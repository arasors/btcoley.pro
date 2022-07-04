import {Component} from "react";
import {connect} from "../../../components/context";

class Ticker extends Component{
    constructor(props) {
        super(props);
    }

    state = {

    }

    render() {
        return(
            <section id="ticker">

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
export default connect(mapStateToProps)(Ticker);