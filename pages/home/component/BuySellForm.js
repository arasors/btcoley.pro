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
        search: "",
        showFavorites: false
    }

    componentDidMount() {

    }


    handleSearchChange = e => {
        this.setState({search: e.target.value})
    }
    handleSearchReset = e => {
        this.setState({search: ""})
    }
    handleShowFavorites = () => {
        this.setState(state => ({showFavorites: !state.showFavorites}));
    }
    handleUpdatePair = (e) => {
        store.dispatch(updateSite({
            ...this.props.site,
            current: {
                ...this.props.site.current,
                pair: e
            }
        }));
    }
    handleUpdateTab = (e) => {
        if(this.props.site?.current?.tab===e) return false;
        store.dispatch(updateSite({
            ...this.props.site,
            current: {
                ...this.props.site.current,
                tab: e
            }
        }));
    }
    handleUpdateFavorite = (e) => {
        let checkExits = this.props.site.user?.favorites && this.props.site.user.favorites.includes(e);
        if(checkExits===true){
            store.dispatch(updateSite({
                ...this.props.site,
                user: {
                    ...this.props.user,
                    favorites: this.props.site.user.favorites.filter(item => item !== e)
                }
            }));
            return true;
        }
        store.dispatch(updateSite({
            ...this.props.site,
            user: {
                ...this.props.user,
                favorites: [
                    ...this.props.site.user.favorites,
                    e
                ]
            }
        }));
    }

    market = () => {
        return Object.entries(this.props.market).filter(
            (t) => {
                if(!JSON.stringify(t).toUpperCase().includes(this.state.search.toUpperCase())) return false;
                if(this.state.showFavorites && (!this.props.site.user?.favorites || !this.props.site.user?.favorites.includes(t[0]))) return false;
                if(this.props.site.current.tab!=="HEPSİ" && !t[0].includes(this.props.site.current.tab)) return false;
                return true;
            }
        )
    }

    render() {
        return (
            <section id="buy-sell">

                


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