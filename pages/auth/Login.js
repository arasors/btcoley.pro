import React,{memo, useEffect, useState} from "react"
import Link from "next/link";
import {connect} from "react-redux";
import {Logo} from "components/liblary";
import {PASSWORD_REGEX, Translate} from "components/controllers";
// import Inputmask from "inputmask"
import {PHONE_REGEX} from "components/controllers";
import {useFormik} from 'formik';
import * as yup from 'yup';

import {
    Box, Button,
    FilledInput,
    FormControl, FormHelperText,
    IconButton,
    InputAdornment, InputBase,
    InputLabel,
    OutlinedInput, Tab, Tabs,
    TextField,
    Typography
} from "@mui/material";
import AppJSON from "package.json"
import {Visibility, VisibilityOff} from "@mui/icons-material";
import * as PropTypes from "prop-types";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(key) {
    return {
        id: `simple-tab-${key}`,
        'aria-controls': `simple-tabpanel-${key}`,
    };
}


const validationSchema = yup.object({
    tab: yup.string(),
    email: yup.string().when("tab", {
            is: value => (value && value==="1" || value && value===1),
            then: yup
            .string(Translate('auth_alert_email_giriniz'))
                .email(Translate('auth_alert_gecersiz_email'))
                .required(Translate('auth_alert_email_bos'))
        }),
    phone: yup.string().when("tab", {
            is: value => (value && value==="2" || value && value===2),
            then: yup
                .string(Translate('auth_alert_telefon_giriniz'))
                .matches(new RegExp(PHONE_REGEX, 'g'), Translate('auth_alert_gecersiz_telefon'))
                .required(Translate('auth_alert_telefon_bos'))
        }),
    tckn: yup.string().when("tab", {
        is: value => (value && value === "3" || value && value === 3),
        then: yup
            .string(Translate('auth_alert_tckn_giriniz'))
            .min(11, Translate('auth_alert_gecersiz_tckn'))
            .required(Translate('auth_alert_tckn_bos'))
    }),
    password: yup
        .string(Translate('auth_alert_sifre_giriniz'))
        .min(8, Translate('auth_alert_sifreniz_8karakterden_kisa'))
        .required(Translate('auth_alert_sifre_bos'))
        .matches(new RegExp(PASSWORD_REGEX, 'g'),Translate('auth_alert_gecersiz_sifre')),
});


const Login = memo(function Login(props) {

    const [state, setState] = useState({
        country: "90",
        showPassword: false,
        password: "",
        tab: 0
    });


    const formik = useFormik({
        initialValues: {
            email: '',
            phone: '',
            tckn: '',
            password: '',
            tab: "1"
        },
        validationSchema: validationSchema,
        // validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
        },
        setFieldValue: (value) => {
            console.log(value);
        }
    });

    const handleTabChange = (event, newValue) => {
        setState({...state, tab: newValue});
        formik.setFieldValue('tab', String(newValue+1));
    };

    const handleClickShowPassword = () => {
        setState({
            ...state,
            showPassword: !state.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    useEffect(() => {
        // if (typeof window !== "undefined" && document.getElementById('phone')) {
        //     // Inputmask({'regex': PHONE_REGEX}).mask(document.querySelector("#phone"));
        // }



    }, [state.tab]);


    // console.log("renderred");

    return (
        <section id="login">
            <div className="split">
                <div id="wrap">


                    <div id="title-bar">
                        <Typography variant="h5" gutterBottom component="div" id="auth-title">
                            {Translate('auth_giris_yap')}
                        </Typography>

                        <Typography variant="span" display="block" gutterBottom id="auth-title-info">
                            {Translate('auth_giris_info')}
                        </Typography>
                    </div>


                    <form onSubmit={formik.handleSubmit} id="auth-form">
                        {/*<InputBase*/}
                        {/*    autoComplete="off"*/}
                        {/*    value={state.tab}*/}
                        {/*    onChange={formik.handleChange}*/}
                        {/*    name="tab"*/}
                        {/*    id="tab"*/}
                        {/*/>*/}

                        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                            <Tabs value={state.tab} onChange={handleTabChange} aria-label="basic tabs example"
                                  variant="scrollable">
                                <Tab label={Translate('auth_email_adresi_ile_giris')} {...a11yProps(0)} />
                                <Tab label={Translate('auth_telefon_numarasi_ile_giris')} {...a11yProps(1)} />
                                <Tab label={Translate('auth_tc_kimlik_ile_giris')} {...a11yProps(2)} />
                            </Tabs>
                        </Box>
                        <TabPanel value={state.tab} index={0}>
                            <TextField
                                fullWidth
                                id="email"
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                                label={Translate('auth_email_adresiniz')}
                                variant="outlined"
                                autoComplete="off"
                            />
                        </TabPanel>
                        <TabPanel value={state.tab} index={1}>
                            <TextField
                                fullWidth
                                id="phone"
                                name="phone"
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                                error={formik.touched.phone && Boolean(formik.errors.phone)}
                                helperText={formik.touched.phone && formik.errors.phone}
                                label={Translate('auth_telefon_numaranız')}
                                variant="outlined"
                                autoComplete="off"
                            />
                        </TabPanel>
                        <TabPanel value={state.tab} index={2}>
                            <TextField
                                fullWidth
                                id="tckn"
                                name="tckn"
                                label={Translate('auth_tc_kimlik_numaranız')}
                                variant="outlined"
                                value={formik.values.tckn}
                                onChange={formik.handleChange}
                                error={formik.touched.tckn && Boolean(formik.errors.tckn)}
                                helperText={formik.touched.tckn && formik.errors.tckn}
                                autoComplete="off"
                            />
                        </TabPanel>


                        <FormControl variant="outlined">
                            <InputLabel
                                htmlFor="outlined-adornment-password">{Translate('auth_sifreniz')}</InputLabel>
                            <OutlinedInput
                                fullWidth
                                type={state.showPassword ? 'text' : 'password'}
                                id="password"
                                name="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {state.showPassword ? <VisibilityOff/> : <Visibility/>}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                            <FormHelperText error={formik.touched.password && Boolean(formik.errors.password)}>{formik.touched.password && formik.errors.password}</FormHelperText>
                        </FormControl>

                        <Button type="submit" onSubmit={formik.handleSubmit} variant="outlined">{Translate('auth_giris_yap')}</Button>
                    </form>


                </div>

            </div>
            <div className="split">

                <Logo theme={props.site.theme}/>


                <div className="top">

                    <div className="head">

                    </div>


                    {/*<div id="url-info">*/}
                    {/*        <span className="url">*/}
                    {/*            <b>https://</b>*/}
                    {/*            <span>www.{AppJSON.url}</span>*/}
                    {/*        </span>*/}
                    {/*    <p dangerouslySetInnerHTML={{__html:Translate('auth_url_info')}}></p>*/}
                    {/*</div>*/}

                </div>


            </div>
        </section>
    )
});

const mapStateToProps = state => {
    return {
        site: state.site,
    };
};
export default connect(mapStateToProps)(Login);