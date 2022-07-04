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


class Orders extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        tab: "AL"
    }

    componentDidMount() {

    }


    handleUpdateTab = (e) => {
        if (this.state.tab === e) return false;
        this.setState({tab: e});
    }


    orders = () => {
        let filter = Object.entries(this.props.order).filter((item) => item[0] === this.props.site.current.pair);
        return filter.length>0 && filter[0].length>0 && filter[0][1];
    }

    render() {
        return (
            <section id="orders">
                <div id="buys">
                    <ButtonGroup
                        orientation="vertical"
                        aria-label="vertical contained button group"
                        variant="text"
                        id="order"
                    >

                        <Button className='order-title' disabled>
                            <div className="price">{Translate('orders_fiyat')}</div>
                            <div className="amount">{Translate('orders_miktar')}</div>
                            <div className="total">{Translate('orders_toplam')}</div>
                        </Button>

                        {(this.props.order && this.orders()["ask"]) &&
                            this.orders()["ask"]
                                .map((item, key) => {
                                    let price = item.px,
                                        total = item.total,
                                        amount = item.qty;
                                    return (
                                        <Button key={key} className={cx({
                                            'order-item group': true,
                                        })}>
                                            <div className="price">{price || "0,00"}</div>
                                            <div className="amount">{amount || "0,00"}</div>
                                            <div className="total">{total || "0,00"}</div>
                                        </Button>
                                    )
                                })}
                        {(!this.props.order || this.orders().length === 0) && (
                            <SonucBulunamadi/>
                        )}
                    </ButtonGroup>
                </div>
                <div id="sells">
                    <ButtonGroup
                        orientation="vertical"
                        aria-label="vertical contained button group"
                        variant="text"
                        id="order"
                    >

                        <Button className='order-title' disabled>
                            <div className="price">{Translate('orders_fiyat')}</div>
                            <div className="amount">{Translate('orders_miktar')}</div>
                            <div className="total">{Translate('orders_toplam')}</div>
                        </Button>

                        {(this.props.order && this.orders()["bid"]) &&
                            this.orders()["bid"]
                                .map((item, key) => {
                                    let price = item.px,
                                        total = item.total,
                                        amount = item.qty;
                                    return (
                                        <Button key={key} className={cx({
                                            'order-item group': true,
                                        })}>
                                            <div className="price">{price || "0,00"}</div>
                                            <div className="amount">{amount || "0,00"}</div>
                                            <div className="total">{total || "0,00"}</div>
                                        </Button>
                                    )
                                })}
                        {(!this.props.order || this.orders().length === 0) && (
                            <SonucBulunamadi/>
                        )}
                    </ButtonGroup>
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        site: state.site,
        order: state.order
    };
};
export default connect(mapStateToProps)(Orders);