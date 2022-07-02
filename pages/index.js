import {Component} from "react"
import {connect} from "react-redux";
import {useRouter} from 'next/router'
import cx from "classnames";

import Home from "./home";
import Header from "components/liblary/Header";
import Footer from "components/liblary/Footer";
import {SocketContext} from "components/socket/market";
import {store, updateSite} from "components/context";
import {themeClassExits} from "components/functions";

class Main extends Component{
    constructor(props) {
        super(props);
    }

    state = {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        themeClassExits(this.props.site.theme);
    }

    componentDidMount() {

        themeClassExits(this.props.site.theme);

        this.props.socket.on("message", d => {
            store.dispatch(updateSite({
                ...this.props.site,
                currencies: d.currencies
            }));
        });
    }


    render() {

        return(
            <main>
                <Header />
                <SocketContext.Consumer>{socket => <Home socket={socket} />}</SocketContext.Consumer>
                <Footer />
            </main>
        )
    }
}
const mapStateToProps = state => {
    return {
        site: state.site,
    };
};
export default connect(mapStateToProps)(Main);