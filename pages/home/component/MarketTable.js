import React,{Component} from "react";
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


class MarketTable extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        search: "",
        showFavorites: false,
        marketDropdown: this.props.site.current.marketDropdown
    }

    componentDidMount() {

    }

    UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
        if(this.state.marketDropdown!==nextProps.site.current.marketDropdown) console.log(nextProps.site.current.marketDropdown);
    }


    handleSearchChange = e => {
        this.setState({search: e.target.value})
    }
    handleSearchReset = () => {
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
            <section id="market-table">
                <ToggleButtonGroup
                    value={this.props.site.current?.tab || 'TRY'}
                    id="tab"
                    onChange={(e) => this.handleUpdateTab(e.target.value)}
                    aria-label="outlined button group">
                    {this.props.site.filters.pairs && this.props.site.filters.pairs.map((tab,key) => {
                        return <ToggleButton key={key} value={tab.name}>{tab.name}</ToggleButton>
                    })}
                    <ToggleButton value="HEPSİ">{Translate('market_table_tab_hepsi')}</ToggleButton>
                </ToggleButtonGroup>

                <div id="search">
                    <Paper
                        component="form"
                        id="search-form"
                        elevation={0}
                    >
                        <InputBase
                            sx={{flex: 1}}
                            placeholder={Translate('market_table_arama')}
                            inputProps={{'aria-label': 'search', 'id': 'search-input'}}
                            autoComplete="off"
                            value={this.state.search}
                            onChange={this.handleSearchChange}

                        />
                        {this.state.search && (
                            <Tooltip title={Translate('market_table_arama_reset')}>
                                <IconButton type="button" id="search-reset" onClick={this.handleSearchReset}>
                                    <RiCloseFill className={'ico'}/>
                                </IconButton>
                            </Tooltip>
                        )}
                        <Tooltip
                            title={Translate(this.state.showFavorites ? 'market_table_favorileri_gizle' : 'market_table_favorileri_goster')} anchorEl>
                            <IconButton type="button" id="favorites" onClick={this.handleShowFavorites}
                                        className={this.state.showFavorites ? 'active' : ''}>
                                <TiStar className={'ico'}/>
                                <span>{Translate('market_table_favoriler')}</span>
                            </IconButton>
                        </Tooltip>

                    </Paper>
                </div>


                <ButtonGroup
                    orientation="vertical"
                    aria-label="vertical contained button group"
                    variant="text"
                    id="market"
                >
                    <Button className='market-title' disabled>
                        <div className="pair">{Translate('market_table_islem_cifti')}</div>
                        <div className="percentage">{Translate('market_table_degisim')}</div>
                        <div className="price">{Translate('market_table_fiyat')}</div>
                    </Button>

                    {this.props.market &&
                        this.market()
                            .map((item,key) => {
                        let pair = item[0],
                            itemPrice = item[1] || {ask: 0, low: 0, high: 0},
                            changePercentage = (Number(itemPrice.low) / Number(itemPrice.high)).toFixed(2),
                            isCurrent = this.props.site.current?.pair===pair,
                            isFavorite = this.props.site.user?.favorites && this.props.site.user?.favorites.includes(pair);
                        return <MarketItem key={key} isCurrent={isCurrent} isFavorite={isFavorite} pair={pair} changePercentage={changePercentage} itemPrice={itemPrice} handleUpdateFavorite={this.handleUpdateFavorite} handleUpdatePair={this.handleUpdatePair} />
                    })}
                    {(!this.props.market || this.market().length===0) && (
                        <SonucBulunamadi />
                    )}
                </ButtonGroup>


            </section>
        )
    }
}


const MarketItem = React.memo(function MarketItem({isCurrent,isFavorite,pair,changePercentage,itemPrice,handleUpdateFavorite,handleUpdatePair}){
    return (
        <Button className={cx({
            'market-item group': true,
            'active': isCurrent,
            'favorite': isFavorite
        })}>
            <div className="pair">
                <TiStar className="ico" onClick={() => handleUpdateFavorite(pair)} />
                <span className="title" onClick={() => handleUpdatePair(pair)}>{pair}</span>
            </div>
            <div className="percentage" onClick={() => handleUpdatePair(pair)}>{isNaN(changePercentage) ? 0 : changePercentage}%</div>
            <div className="price" onClick={() => handleUpdatePair(pair)}>{itemPrice.ask || "0,00"}</div>
        </Button>
    )
})


const mapStateToProps = state => {
    return {
        site: state.site,
        market: state.market
    };
};
export default connect(mapStateToProps)(MarketTable);