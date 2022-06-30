import cx from "classnames"
import {store,connect, marketAction, toggleTheme} from "components/context"

function Header(props){
    const switchTheme = () => {
        store.dispatch(toggleTheme());
    }

    const resetMarket = () => {
        store.dispatch({
            type: 'RESET_MARKET_DATA',
            payload: ''
        });
    }

    const resetOrder = () => {
        store.dispatch({
            type: 'RESET_ORDER_DATA',
            payload: ''
        });
    }

    return(
        <div className={cx({
            'flex justify-between w-full px-2 py-2 items-center border-b border-solid': true,
            [props.context?.defaultClass.background.light || '']: props.context?.theme==='light',
            [props.context?.defaultClass.background.dark || '']: props.context?.theme==='dark',
            [props.context?.defaultClass.border.light || '']: props.context?.theme==='light',
            [props.context?.defaultClass.border.dark || '']: props.context?.theme==='dark',
        })}>
            <span>Header</span>
            <div className="flex gap-2">
                <button
                    onClick={resetOrder}
                    className={cx({
                        'border border-solid px-4 py-2 rounded-lg font-medium': true,
                        'border-slate-300 bg-slate-100 text-slate-900': props.context?.theme==='light',
                        'border-slate-100 bg-slate-900 text-slate-100': props.context?.theme==='dark',
                    })}>
                    RESET ORDER
                </button>
                <button
                    onClick={resetMarket}
                    className={cx({
                        'border border-solid px-4 py-2 rounded-lg font-medium': true,
                        'border-slate-300 bg-slate-100 text-slate-900': props.context?.theme==='light',
                        'border-slate-100 bg-slate-900 text-slate-100': props.context?.theme==='dark',
                    })}>
                    RESET MARKET
                </button>

                <button
                    onClick={switchTheme}
                    className={cx({
                        'border border-solid px-4 py-2 rounded-lg font-medium': true,
                        'border-slate-300 bg-slate-100 text-slate-900': props.context?.theme==='light',
                        'border-slate-100 bg-slate-900 text-slate-100': props.context?.theme==='dark',
                    })}>
                    {props.context?.theme}
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        context: state.site,
    };
};
export default connect(mapStateToProps)(Header);