import {Component} from "react"
import {useRouter} from 'next/router'
import cx from "classnames";

import Home from "./home";
import Header from "components/liblary/Header";
import Footer from "components/liblary/Footer";
import {connect} from "react-redux";


class Main extends Component{
    constructor(props) {
        super(props);
    }

    state = {

    }


    render() {
        return(
            <main className={cx({
                'w-screen h-screen overflow-x-hidden overflow-y-auto flex-1 flex flex-col': true,
                [this.props.context?.defaultClass.background.light || '']: this.props.context?.theme==='light',
                [this.props.context?.defaultClass.background.dark || '']: this.props.context?.theme==='dark',
                [this.props.context?.defaultClass.border.light || '']: this.props.context?.theme==='light',
                [this.props.context?.defaultClass.border.dark || '']: this.props.context?.theme==='dark',
            })}>
                <Header />
                <Home />
                <Footer />
            </main>
        )
    }
}
const mapStateToProps = state => {
    return {
        context: state.site,
    };
};
export default connect(mapStateToProps)(Main);