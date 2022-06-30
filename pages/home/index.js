import Link from "next/link";
import cx from "classnames";
import {store, connect, updateSite} from "components/context";

function Home(props){

    props.socket.on("message", d => {
        // d.currencies
        store.dispatch(updateSite({
            ...props.context,
            currencies: d.currencies
        }));
    });


    return(
        <div className={cx({
            'flex flex-row flex-1 items-center justify-center font-bold': true,
            'text-slate-900': props.context?.theme==='light',
            'text-slate-100': props.context?.theme==='dark'
        })}>

            <div className={cx({
                'flex flex-col flex-1 items-center justify-center font-bold w-full': true,
                'text-slate-900': props.context?.theme==='light',
                'text-slate-100': props.context?.theme==='dark'
            })}>

                {Object.entries(props.market).map && Object.entries(props.market).map((item,key) => (
                    <div key={key} className={cx({
                        'flex flex-wrap justify-center items-center border border-solid container divide-x divide-solid':true,
                        [props.context?.defaultClass.border.light || '']: props.context?.theme==='light',
                        [props.context?.defaultClass.border.dark || '']: props.context?.theme==='dark',
                        [props.context?.defaultClass.divide.light || '']: props.context?.theme==='light',
                        [props.context?.defaultClass.divide.dark || '']: props.context?.theme==='dark',
                    })}>
                        {/*<p className={'p-2'}>{JSON.stringify(item)}</p>*/}
                        <span className={'basis-1/2 text-right px-2'}>{item[0]}</span>
                        <span className={'basis-1/2 text-left px-2 font-normal'}>{item[1].prices.ask}</span>
                    </div>
                ))}


            </div>

            <div className={cx({
                'flex flex-col flex-1 items-center justify-center font-bold w-full max-h-screen': true,
                'text-slate-900': props.context?.theme==='light',
                'text-slate-100': props.context?.theme==='dark'
            })}>

                {/*<p>{JSON.stringify(props.order)}</p>*/}

            </div>




        </div>
    )
}
const mapStateToProps = state => {
    return {
        context: state.site,
        market: state.market,
        order: state.order
    };
};
export default connect(mapStateToProps)(Home);