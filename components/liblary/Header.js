import {Component} from "react";
import Image from 'next/future/image';
import {connect} from "components/context"
import {switchTheme, resetOrder, resetMarket} from "../controllers";
import {header} from "../data/header"
import {Logo} from "./";

class Header extends Component{
    constructor(props) {
        super(props);
    }

    state = {

    }



    render() {
        return(
            <nav>
                {header.settings.left.visible===true &&
                    <section id={'left'} className={`justify-${header.settings.left.align}`}>
                        {header.left && header.left.map((left,key) => {
                            if(left==='LOGO'){
                                return(
                                    <Logo key={key} theme={this.props.site.theme} />
                                )
                            }
                            return(
                                <>{left}</>
                            )

                        })}
                    </section>
                }
                {header.settings.center.visible === true &&
                    <section id={'center'}>
                        {header.center && header.center.map((center,key) => {
                            if(center==='LOGO'){
                                return(
                                    <Logo key={key} theme={this.props.site.theme} />
                                )
                            }
                            if(center.visible===false){return;}
                            return(
                                <div key={key} className={''}>
                                    {center.text}
                                </div>
                            )

                        })}
                    </section>
                }
                {header.settings.right.visible === true &&
                    <section id={'right'}>
                        {header.right==='LOGO' && <Logo theme={this.props.site.theme} />}
                    </section>
                }

            </nav>
        )
    }
}

const mapStateToProps = state => {
    return {
        site: state.site,
    };
};
export default connect(mapStateToProps)(Header);