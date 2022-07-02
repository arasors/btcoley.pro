import {Component} from "react"
import {useRouter} from 'next/router'
import cx from "classnames";

import Home from "./home";
import Header from "components/liblary/Header";
import Footer from "components/liblary/Footer";
import {connect} from "react-redux";
import {SocketContext} from "../components/socket/market";
import {store, updateSite} from "../components/context";

class Main extends Component{
    constructor(props) {
        super(props);
    }

    state = {

    }

    componentDidMount() {
        if(this.props.site.theme!=='light'){
            document.documentElement.classList.add('dark');
        }


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