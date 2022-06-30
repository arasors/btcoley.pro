import Link from "next/link";
import cx from "classnames";
import {store, connect, updateSite} from "components/context";
import {Component} from "react";

class  Home extends Component{

    constructor(props) {
        super(props);
    }

    state = {
        pair: 'BTC/TRY',
        orders: [],
        loaded: false
    }

    UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
        if(this.state.orders!==nextProps.order){
            let order = Object.entries(nextProps.order).filter(item => item[0]===this.state.pair);
            this.setState({orders: {...order}});
            if(this.state.loaded===false){
                this.setState({loaded:true});
            }
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.state.loaded!==prevState.loaded){
            // console.log(Object.values(this.state.orders));
        }
    }

    componentDidMount(){
        this.props.socket.on("message", d => {
            // d.currencies
            store.dispatch(updateSite({
                ...this.props.context,
                currencies: d.currencies
            }));
        });

    }

    render() {
        // console.log(Object.keys(this.state.orders).filter(item => item===this.state.pair));
        // console.log(Object(this.state.orders).length);

        return (
            <div className={cx({
                'flex flex-col font-bold h-full': true,
                'text-slate-900': this.props.context?.theme === 'light',
                'text-slate-100': this.props.context?.theme === 'dark'
            })}>

                <div className={'flex flex-nowrap'}>
                    <div className={cx({
                        'flex flex-col items-center font-bold basis-full md:basis-1/3 max-h-[55vh] overflow-x-hidden overflow-y-auto': true,
                        'text-slate-900': this.props.context?.theme === 'light',
                        'text-slate-100': this.props.context?.theme === 'dark'
                    })}>

                        {this.props.market && Object.entries(this.props.market).map((item, key) => {
                            const pair = item[0],
                                price = item[1];
                            return (
                                <div key={key}
                                     onClick={() => this.setState({pair: pair})}
                                     className={cx({
                                    'flex flex-wrap justify-center items-center border border-solid container divide-x divide-solid': true,
                                    'select-none cursor-pointer hover:bg-slate-100': true,
                                    [this.props.context?.defaultClass.border.light || '']: this.props.context?.theme === 'light',
                                    [this.props.context?.defaultClass.border.dark || '']: this.props.context?.theme === 'dark',
                                    [this.props.context?.defaultClass.divide.light || '']: this.props.context?.theme === 'light',
                                    [this.props.context?.defaultClass.divide.dark || '']: this.props.context?.theme === 'dark',
                                })}>
                                    {/*<p className={'p-2'}>{JSON.stringify(item)}</p>*/}
                                    <span className={'basis-1/2 text-right px-2'}>{pair}</span>
                                    <span className={'basis-1/2 text-left px-2 font-normal'}>{price.ask}</span>
                                </div>
                            )
                        })}


                    </div>
                    <div className="grow">
                        <h3 className={'p-4 text-xl'}>{this.state.pair}</h3>
                    </div>
                </div>

                <div className={cx({
                    'flex flex-row items-center justify-center font-bold w-full max-h-screen grow divide-x divide-solid': true,
                    'text-slate-900': this.props.context?.theme === 'light',
                    'text-slate-100': this.props.context?.theme === 'dark',
                    [this.props.context?.defaultClass.divide.light || '']: this.props.context?.theme === 'light',
                    [this.props.context?.defaultClass.divide.dark || '']: this.props.context?.theme === 'dark',
                })}>

                    <div className={cx({
                        'flex-1 h-full border-t border-solid': true,
                        [this.props.context?.defaultClass.border.light || '']: this.props.context?.theme === 'light',
                        [this.props.context?.defaultClass.border.dark || '']: this.props.context?.theme === 'dark',
                    })}>
                        {this.state.loaded ? this.state.orders?.ask?.map((item, i) => {
                                    return (
                                        <div key={i} className={cx({
                                            'orders flex flex-nowrap gap-2 flex-1': true
                                        })}>
                                            <div className="basis-1/3">{item.total}</div>
                                            <div className="basis-1/3">{item.qty}</div>
                                            <div className="basis-1/3">{item.px}</div>
                                        </div>
                                    )
                                })
                        : <div className="flex-1 p-4 flex justify-center items-center h-full bg-blue-600 select-none">
                            <span className={'bg-blue-700 rounded p-2 text-slate-100 text-xs flex flex-1 h-full items-center justify-center'}>Pair Geçersiz</span>
                        </div>}
                    </div>
                    <div className={cx({
                        'flex-1 h-full border-t border-solid': true,
                        [this.props.context?.defaultClass.border.light || '']: this.props.context?.theme === 'light',
                        [this.props.context?.defaultClass.border.dark || '']: this.props.context?.theme === 'dark',
                    })}>

                    </div>

                </div>


            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        context: state.site,
        market: state.market,
        order: state.order
    };
};
export default connect(mapStateToProps)(Home);