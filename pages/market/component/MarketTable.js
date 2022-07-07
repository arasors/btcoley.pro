import React, {useState, useCallback, memo, useMemo} from "react";
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


const MarketTable = memo(function MarketTable(props){

    const [state, setState] = useState({
        search: "",
        showFavorites: false,
        marketDropdown: props.site.current.marketDropdown
    });


    const handleSearchChange = e => {
        setState({search: e.target.value})
    }
    const handleSearchReset = useCallback(() => {
        setState({search: ""})
    },[]);

    const handleShowFavorites = useCallback(() => {
        setState(state => ({showFavorites: !state.showFavorites}));
    },[state.showFavorites]);

    const handleUpdatePair = useCallback((e) => {
        store.dispatch(updateSite({
            ...props.site,
            current: {
                ...props.site.current,
                pair: e
            }
        }));
    },[props.site,props.site.current]);

    const handleUpdateTab = useCallback((e) => {
        if(props.site?.current?.tab===e) return false;
        store.dispatch(updateSite({
            ...props.site,
            current: {
                ...props.site.current,
                tab: e
            }
        }));
    },[props.site]);

    const handleUpdateFavorite = useCallback(function (e){
        let checkExits = props.site.user?.favorites && props.site.user.favorites.includes(e);
        if(checkExits===true){
            store.dispatch(updateSite({
                ...props.site,
                user: {
                    ...props.site.user,
                    favorites: props.site.user.favorites.filter(item => item !== e)
                }
            }));
            return true;
        }
        store.dispatch(updateSite({
            ...props.site,
            user: {
                ...props.site.user,
                favorites: [
                    ...props.site?.user?.favorites || [],
                    e
                ]
            }
        }));
    },[props.site]);


    const market = useMemo(() => {
        return Object.entries(props.market).filter(
            (t) => {
                if(!JSON.stringify(t).match(new RegExp(state.search, "i"))) return false;
                if(state.showFavorites && (!props.site.user?.favorites || !props.site.user?.favorites.includes(t[0]))) return false;
                if(props.site.current.tab!=="HEPSİ" && !t[0].includes(props.site.current.tab)) return false;
                return true;
            }
        )
    }, [props.market, state.search, state.showFavorites, props.site?.user, props.site?.current.tab]);




        return (
            <section id="market-table">
                <ToggleButtonGroup
                    value={props.site.current?.tab || 'TRY'}
                    id="tab"
                    onChange={(e) => handleUpdateTab(e.target.value)}
                    aria-label="outlined button group">
                    {props.site.filters.pairs && props.site.filters.pairs.map((tab,key) => {
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
                            value={state.search}
                            onChange={handleSearchChange}

                        />
                        {state.search && (
                            <Tooltip title={Translate('market_table_arama_reset')}>
                                <IconButton type="button" id="search-reset" onClick={handleSearchReset}>
                                    <RiCloseFill className={'ico'}/>
                                </IconButton>
                            </Tooltip>
                        )}
                        <Tooltip
                            title={Translate(state.showFavorites ? 'market_table_favorileri_gizle' : 'market_table_favorileri_goster')} anchorEl>
                            <IconButton type="button" id="favorites" onClick={handleShowFavorites}
                                        className={state.showFavorites ? 'active' : ''}>
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

                    {props.market &&
                        market.map((item,key) => {
                                let pair = item[0],
                                    itemPrice = item[1] || {ask: 0, low: 0, high: 0},
                                    changePercentage = (Number(itemPrice.low) / Number(itemPrice.high)).toFixed(2),
                                    isCurrent = props.site.current?.pair===pair,
                                    isFavorite = props.site.user?.favorites && props.site.user?.favorites.includes(pair);
                                return <MarketItem key={key} isCurrent={isCurrent} isFavorite={isFavorite} pair={pair} changePercentage={changePercentage} itemPrice={itemPrice} handleUpdateFavorite={handleUpdateFavorite} handleUpdatePair={handleUpdatePair} />
                            })}
                    {(!props.market || market.length===0) && (
                        <SonucBulunamadi />
                    )}
                </ButtonGroup>


            </section>
        )
    
});


const MarketItem = memo(function MarketItem({isCurrent,isFavorite,pair,changePercentage,itemPrice,handleUpdateFavorite,handleUpdatePair}){
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
});


const mapStateToProps = state => {
    return {
        site: state.site,
        market: state.market
    };
};
export default connect(mapStateToProps)(MarketTable);