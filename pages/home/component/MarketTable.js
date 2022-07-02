import {Component} from "react";
import {connect} from "components/context";
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
import {RiCloseFill} from "@react-icons/all-files/ri/RiCloseFill";
import {TiStar} from "@react-icons/all-files/ti/TiStar";


class MarketTable extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        tab: "TRY",
        search: "",
        showFavorites: false,
        market: []
    }

    /***/
    componentDidMount() {

    }

    // UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
    //     if (nextProps.market !== this.state.market) {
    //         this.setState({market: nextProps.market});
    //     }
    // }

    /***/

    handleSearchChange = e => {
        this.setState({search: e.target.value})
    }
    handleSearchReset = e => {
        this.setState({search: ""})
    }
    handleShowFavorites = () => {
        this.setState(state => ({showFavorites: !state.showFavorites}));
    }

    render() {
        return (
            <section id="market-table">
                <ToggleButtonGroup
                    value={this.state.tab}
                    id="tab"
                    onChange={(e) => this.setState({tab: e.target.value})}
                    aria-label="outlined button group">
                    <ToggleButton value="TRY">TRY</ToggleButton>
                    <ToggleButton value="USDT">USDT</ToggleButton>
                    <ToggleButton value="HEPSİ">HEPSİ</ToggleButton>
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
                            title={Translate(this.state.showFavorites ? 'market_table_favorileri_gizle' : 'market_table_favorileri_goster')}>
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

                    {this.props.market && Object.entries(this.props.market).filter((t) => JSON.stringify(t).includes(this.state.search)).map((item,key) => {
                        let pair = item[0],
                            itemPrice = item[1] || {ask: 0, low: 0, high: 0},
                            changePercentage = (Number(itemPrice.low) / Number(itemPrice.high)).toFixed(2);
                        return(
                            <Button key={key} className='market-item'>
                                <div className="pair">
                                    <TiStar className={'ico'} />
                                    <span className="title">{pair}</span>
                                </div>
                                <div className="percentage">{changePercentage}%</div>
                                <div className="price">{itemPrice.ask || "0,00"}</div>
                            </Button>
                        )
                    })}



                </ButtonGroup>


            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        site: state.site,
        market: state.market
    };
};
export default connect(mapStateToProps)(MarketTable);