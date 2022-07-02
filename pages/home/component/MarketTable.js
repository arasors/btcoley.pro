import {Component} from "react";
import {Paper, ToggleButton, ToggleButtonGroup, IconButton, InputBase, Tooltip} from "@mui/material";
import {useTranslate} from "components/controllers";
import {RiCloseFill} from "@react-icons/all-files/ri/RiCloseFill";
import {TiStar} from "@react-icons/all-files/ti/TiStar";
import {connect} from "../../../components/context";


class MarketTable extends Component{
    constructor(props) {
        super(props);
    }

    state = {
        tab: "TRY",
        search: "",
        showFavorites: false
    }

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
        return(
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
                    >
                        <InputBase
                            sx={{flex: 1 }}
                            placeholder={useTranslate('market_table_arama')}
                            inputProps={{ 'aria-label': 'search', 'id' : 'search-input' }}
                            autoComplete="off"
                            value={this.state.search}
                            onChange={this.handleSearchChange}

                        />
                        {this.state.search && (
                            <Tooltip title={useTranslate('market_table_arama_reset')}>
                                <IconButton type="button" id="search-reset" onClick={this.handleSearchReset}>
                                    <RiCloseFill className={'ico'} />
                                </IconButton>
                            </Tooltip>
                        )}
                        <Tooltip title={useTranslate(this.state.showFavorites ? 'market_table_favorileri_gizle' : 'market_table_favorileri_goster')}>
                            <IconButton type="button" id="favorites" onClick={this.handleShowFavorites} className={this.state.showFavorites ? 'active' : ''}>
                                <TiStar className={'ico'} />
                                <span>{useTranslate('market_table_favoriler')}</span>
                            </IconButton>
                        </Tooltip>

                    </Paper>
                </div>


            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        site: state.site,
        order: state.order
    };
};
export default connect(mapStateToProps)(MarketTable);