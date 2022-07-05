import React, {Component, useRef, useEffect, memo, useMemo, useCallback, useState} from "react";
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
import {useSelector} from "react-redux";


const Orders = memo(function Orders() {

    return (
        <section id="orders">
            <div id="buys">
                <Order orderType="bid"/>
            </div>
            <div id="sells">
                <Order orderType="ask"/>
            </div>
        </section>
    )

});

// eslint-disable-next-line react/display-name
const Order = memo(function Order({orderType}) {

    // const orderRef = useRef(null);

    const order = useSelector(state => state.order),
          site  = useSelector(state => state.site);

    const orders = useMemo(() => {
        let filter = Object.entries(order).filter((item) => item[0] === site.current.pair);
        return filter.length>0 && filter[0].length>0 && filter[0][1];
    },[order,site.current.pair]);


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

            {(order && orders[orderType]) &&
                orders[orderType]
                    .map((item, key) => {
                        let price = item.px,
                            total = item.total,
                            amount = item.qty;
                        return <OrderItem key={key} price={price} amount={amount} total={total} />
                    })}
            {(!order || orders.length === 0) && (
                <SonucBulunamadi/>
            )}
        </ButtonGroup>
    )
});


const OrderItem = memo(function OrderItem({price, amount, total}) {
    return (
        <Button className={cx({
            'order-item group': true,
        })}>
            <div className="price">{price || "0,00"}</div>
            <div className="amount">{amount || "0,00"}</div>
            <div className="total">{total || "0,00"}</div>
        </Button>
    )
})


export default Orders;