import {Component} from "react"
import {useRouter} from 'next/router'
import cx from "classnames";

import Home from "./home";
import Header from "components/liblary/Header";
import Footer from "components/liblary/Footer";
import {connect} from "react-redux";
import {SocketContext} from "../components/socket/market";

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