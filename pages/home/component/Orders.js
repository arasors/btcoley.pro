import React,{Component, useRef, useEffect} from "react";
import {connect, store, updateSite} from "components/context";
import autoAnimate from "@formkit/auto-animate";
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
import {GetCurrentCurrency, Translate} from "components/controllers";
import cx from "classnames"
import SonucBulunamadi from "components/liblary/component/SonucBulunamadi";
import {useAutoAnimate} from "@formkit/auto-animate/react";


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

    render() {
        return (
            <section id="orders">
                <div id="buys">
                    <Order {...this.props} orderType="bid" />
                </div>
                <div id="sells">
                    <Order {...this.props} orderType="ask" />
                </div>
            </section>
        )
    }
}

function Order(props){

    // const orderRef = useRef(null);

    const orders = () => {
        let filter = Object.entries(props.order).filter((item) => item[0] === props.site.current.pair);
        return filter.length>0 && filter[0].length>0 && filter[0][1];
    }

    return(
        <ButtonGroup
            orientation="vertical"
            aria-label="vertical contained button group"
            variant="text"
            id="order"
        >

            <Button className='order-title' disabled>
                <div className="price">{Translate('orders_fiyat')} (<GetCurrentCurrency ret="sell" />)</div>
                <div className="amount">{Translate('orders_miktar')}</div>
                <div className="total">{Translate('orders_toplam')} (<GetCurrentCurrency ret="sell" />)</div>
            </Button>

            {(props.order && orders()[props.orderType]) &&
                orders()[props.orderType]
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
            {(!props.order || orders().length === 0) && (
                <SonucBulunamadi/>
            )}
        </ButtonGroup>
    )
}


const mapStateToProps = state => {
    return {
        site: state.site,
        order: state.order
    };
};
export default connect(mapStateToProps)(Orders);