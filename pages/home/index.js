import React, {memo, useCallback, useMemo} from "react";
import AppJSON from "package.json";
import Footer from "components/liblary/Footer";
import Image from "next/future/image";
import {
    Button, Card,
    FormControl,
    FormHelperText,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput, Paper,
    Typography
} from "@mui/material";
import {Translate} from "components/controllers";
import {useFormik} from "formik";
import * as yup from "yup";
import {store,connect, updateSite} from "components/context";
import {useSelector} from "react-redux";


const Home = memo(function Home(props) {
    // const site = useSelector(states => states.site);

    const {site, market} = props;

    const validationSchema = yup.object({
        email: yup
                .string(Translate('auth_alert_email_giriniz'))
                .email(Translate('auth_alert_gecersiz_email'))
                .required(Translate('auth_alert_email_bos'))
    });


    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            handleUpdateEmail(values);
            formik.setFieldValue('email', '');
            return true;
        }

    });

    const handleUpdateEmail = useCallback((values) => {
            store.dispatch(updateSite({
                ...site,
                current: {
                    ...site.current,
                    register: {
                        email: values.email
                    }
                }
            }));
        },
        [site]);


    const pricesItems = useMemo(() => {
        return Object.entries(market).filter((item,key) => item[0].includes('TRY')).slice(0,10);
    }, [market]);


    return (
        <React.Fragment>
            <section id="home" className="hero-section">
                <div id="slider">
                    <div id="banner-typography" className="split">
                        <Typography variant="h2" gutterBottom component="div" id="head-text">
                            {Translate('home_banner_kolayca')} <span className="text-primary">{Translate('home_banner_kripto_para')}</span> {Translate('home_banner_al_sat')}
                        </Typography>

                        <Typography variant="h5" gutterBottom component="div" id="head-text-sub">
                            {Translate('home_banner_slogan_alt_metin')}
                        </Typography>

                        <FormControl variant="outlined" id="quick-register-email">
                            <InputLabel htmlFor="email">{Translate('auth_register_email')}</InputLabel>
                            <OutlinedInput
                                fullWidth
                                sx={{borderRadius: 50}}
                                type="text"
                                id="email"
                                name="email"
                                autoComplete="off"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                // error={formik.touched.email && Boolean(formik.errors.email)}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <Button
                                            onClick={formik.submitForm}
                                            edge="end"
                                            variant="outlined"
                                            sx={{borderRadius: 50}}
                                        >
                                            {Translate('auth_register_kayit_ol')}
                                        </Button>
                                    </InputAdornment>
                                }
                            />
                            <FormHelperText className="quick-register-email-helper" error={formik.touched.email && Boolean(formik.errors.email)}>{formik.touched.email && formik.errors.email}</FormHelperText>
                        </FormControl>

                        <Image src={require(`public/home/banner/03deec809eea.png`)} alt={AppJSON.title} className="light" />

                    </div>
                    <div id="banner-image" className="split">
                        <Image src={require(`public/home/banner/3a079af14735.png`)} alt={AppJSON.title} />
                    </div>
                </div>

                <div id="price-cards">
                    {pricesItems && pricesItems.map((item,key) => {
                        let pair = item[0],
                            itemPrice = item[1] || {ask: 0, low: 0, high: 0, volume: 0},
                            changePercentage = (Number(itemPrice.low) / Number(itemPrice.high)).toFixed(2);

                        let formatter = Intl.NumberFormat('TR', {
                                notation: 'compact',
                                maximumFractionDigits: 1
                            });

                        return(
                            <div className="item" key={key}>
                                <div className="head">
                                    <Typography variant="h6" gutterBottom component="div" className="title">{pair}</Typography>
                                    <Typography variant="h6" gutterBottom component="div" className="perc">{changePercentage}%</Typography>
                                </div>
                                <Typography variant="h6" gutterBottom component="div" className="price">{itemPrice.ask || "0,00"}</Typography>
                                <Typography variant="h6" gutterBottom component="div" className="volume">
                                    <span>{Translate('ticker_24saat_hacim').toLocaleUpperCase('TR')}</span> <span>{formatter.format(itemPrice.volume)}</span>
                                </Typography>
                            </div>
                        )
                    })}
                </div>


            </section>
            <Footer/>
        </React.Fragment>
    )

});

const mapStateToProps = state => {
    return {
        site: state.site,
        market: state.market
    };
};
export default connect(mapStateToProps)(Home);