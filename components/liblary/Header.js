import {Component, Fragment} from "react";
import {connect} from "components/context"
import {switchTheme, resetOrder, resetMarket, Translate} from "../controllers";
import {header} from "../data/header"
import {Logo,MaterialUISwitch} from "./";
import Link from "next/link";
import {Button, Divider, FormControlLabel, Tooltip} from "@mui/material";

class Header extends Component{
    constructor(props) {
        super(props);
    }

    state = {
        menu: false
    }



    render() {
        return(
            <>
                <nav id="desktop">
                    {header.grids && Object.entries(header.grids).map((headerItem, headerKey) => {
                        if(Object(header.settings)[headerItem[0]].visible===false) return false;
                        return(
                            <section key={headerKey} id={headerItem[0]} className={`custom-justify-${Object(header.settings)[headerItem[0]].align}`}>
                                {headerItem[1] && headerItem[1].map((item,key) => {
                                    if(item==='LOGO'){
                                        return(
                                            <Link href={'/'} key={key}>
                                                <Logo theme={this.props.site.theme} />
                                            </Link>
                                        )
                                    }
                                    if(item==="DIVIDE"){
                                        return <Divider key={key} sx={{ height: 28, m: 0.5 }} orientation="vertical" id="separate" />
                                    }
                                    if(item==="THEME_TOGGLE"){
                                        return (
                                            <div key={key} id="toggle-theme">
                                                <Tooltip key={key} title={Translate(this.props.site.theme==='light' ? 'gece_moduna_gec' : 'aydinlik_moda_gec')}>
                                                    <FormControlLabel control={<MaterialUISwitch label={""} />} checked={this.props.site.theme==='dark'} onChange={switchTheme} />
                                                </Tooltip>
                                            </div>
                                        )
                                    }

                                    if(item.visible===false) return;
                                    if(item.auth===true && (this.props.site.user.isLogin === "undefined" || !this.props.site.user.isLogin)) return;
                                    if((typeof item === "object" || Array.isArray(item)) && item.to !== "undefined") {
                                        return (
                                            <Link href={`${item.to}`} key={key}>
                                                <Button variant={item.variant || 'outlined'} className={'nav-link'}>
                                                    {Translate(item.text)}
                                                </Button>
                                            </Link>
                                        )
                                    }


                                    return false;
                                })}
                            </section>
                        )
                    })}
                </nav>
                <nav id="mobile">
                    <section className={`custom-justify-center`}>
                        <Link href={'/'}>
                            <>
                                <Logo theme={this.props.site.theme} />
                                <Button variant="text" onClick={() => this.setState(state => ({menu: !state.menu}))}>
                                    <div className={`menu btn1 ${this.state.menu ? 'open' : ''}`} data-menu="1">
                                        <div className="icon-left"></div>
                                        <div className="icon-right"></div>
                                    </div>
                                </Button>
                            </>
                        </Link>
                    </section>
                    <div id="open-menu" className={this.state.menu && 'active'}>
                        {header.grids && Object.entries(header.grids).map((headerItem, headerKey) => {
                            if(Object(header.settings)[headerItem[0]].visible===false) return ;
                            if(headerItem[1][0]==='LOGO') return false;
                            return(
                                <Fragment key={headerKey}>
                                    {headerItem[1] && headerItem[1].map((item,key) => {
                                        if(item==='LOGO') return;
                                        if(item==="DIVIDE"){
                                            return <Divider key={key} sx={{ height: 28, m: 0.5 }} orientation="horizontal" id="separate" />
                                        }
                                        if(item==="THEME_TOGGLE"){
                                            return (
                                                <div id="toggle-theme">
                                                    <Tooltip key={key} title={Translate(this.props.site.theme==='light' ? 'gece_moduna_gec' : 'aydinlik_moda_gec')}>
                                                        <FormControlLabel control={<MaterialUISwitch label={""} />} checked={this.props.site.theme==='dark'} onChange={switchTheme} />
                                                    </Tooltip>
                                                </div>
                                            )
                                        }

                                        if(item.visible===false) return;
                                        if(item.auth===true && (this.props.site.user.isLogin === "undefined" || !this.props.site.user.isLogin)) return;
                                        if((typeof item === "object" || Array.isArray(item)) && item.to !== "undefined"){
                                            return(
                                                <Link href={`${item.to}`} key={key}>
                                                    <Button variant={item.variant || 'outlined'} className={'nav-link'}>
                                                        {Translate(item.text)}
                                                    </Button>
                                                </Link>
                                            )
                                        }


                                        return false;
                                    })}
                                </Fragment>
                            )
                        })}
                    </div>
                </nav>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        site: state.site,
    };
};
export default connect(mapStateToProps)(Header);