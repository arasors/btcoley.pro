import React,{memo, useEffect, useState} from "react"
import Link from "next/link";
import {connect} from "react-redux";
import {Logo} from "components/liblary";
import {PASSWORD_REGEX, Translate} from "components/controllers";
// import Inputmask from "inputmask"
import {PHONE_REGEX} from "components/controllers";
import {useFormik} from 'formik';
import * as yup from 'yup';
import {codeInput} from "components/data"
import {
    login as loginApi,
    smsConfirm as smsApi,
    authenticatorConfirm as authApi
} from "components/api"

import {
    Alert,
    Box,
    Button, CircularProgress,
    FormControl,
    FormHelperText,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput, Tab, Tabs,
    TextField,
    Typography
} from "@mui/material";
import AppJSON from "package.json";

import {
    ChevronLeft,
    ChevronRight,
    Visibility,
    VisibilityOff
} from "@mui/icons-material";
import ReactCodeInput from "react-code-input";

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
const verifyValidationSchema = yup.object({
    method: yup.string(),
    sms: yup.string().when("method", {
            is: value => value && value==="sms",
            then: yup
                .string(Translate('auth_alert_sms_kodunu_giriniz'))
                .min(5, Translate('auth_alert_sms_kodunu_eksik_girdiniz'))
                .max(5, Translate('auth_alert_sms_kodunu_fazla_girdiniz'))
                .required(Translate('auth_alert_sms_kodunu_giriniz'))
        }),
    authenticator: yup.string().when("method", {
            is: value => value && value==="authenticator",
            then: yup
                .string(Translate('auth_alert_authenticator_kodunu_giriniz'))
                .min(6, Translate('auth_alert_authenticator_kodunu_eksik_girdiniz'))
                .max(6, Translate('auth_alert_authenticator_kodunu_fazla_girdiniz'))
                .required(Translate('auth_alert_authenticator_kodunu_giriniz'))
        })
});


const Login = memo(function Login(props) {


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
    const handleClickStepNav = () => {
        setState({
            ...state,
            verifyStep: !state.verifyStep,
            navigate: true
        });
    };


    const formik = useFormik({
        initialValues: {
            email: '',
            phone: '',
            tckn: '',
            country: 'TR',
            password: '',
            tab: "1"
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const {email, password, country, phone, tckn, tab} = values;
            setState(states => ({...states, loaded: false}));

            loginApi(email, password, country, phone, tckn, tab).then(ret => {
                const response = ret.data;
                if(response.status===200){
                    if(response.method==="sms"){
                        setState({
                            ...state,
                            verifyStep: true,
                            navigate: true,
                            method: "sms",
                            error: false,
                            loaded: true
                        });
                        verifyFormik.setFieldValue('method', 'sms');
                    }else{
                        setState({
                            ...state,
                            verifyStep: true,
                            navigate: true,
                            method: "authenticator",
                            error: false,
                            loaded: true
                        });
                        verifyFormik.setFieldValue('method', 'authenticator');
                    }
                }else{
                    if(response.message==="Unauthorized"){
                        setState(states => ({...states, error: "auth_alert_giris_basarisiz"}));
                    }
                    setState(states => ({...states, loaded: true}));
                }
            }).catch(error => state.loaded===false && setState(states => ({...states, loaded: true})));
        }
    });
    const verifyFormik = useFormik({
        initialValues: {
            method: "authenticator", // sms || authenticator
            sms: '',
            authenticator: ''
        },
        validationSchema: verifyValidationSchema,
        onSubmit: (values) => {
            setState(states => ({...states, loaded: false}));
            const {email, phone, country, tckn, tab} = formik.values;

            if(values.method==="sms"){
                const code = values.sms;
                smsApi(email, phone, country, tckn, tab, code, true).then(ret  => {

                    setState((states) => ({
                        ...states,
                        loaded: true
                    }));

                }).catch(err => setState(states => ({...states, loaded: true})))
            }else{
                const code = values.authenticator;
                authApi(email, phone, country, tckn, tab, code, true).then(ret  => {

                    setState((states) => ({
                        ...states,
                        loaded: true
                    }));

                }).catch(err => setState(states => ({...states, loaded: true})))

            }
        }
    });

    const [state, setState] = useState({
        verifyStep: false,
        method: 'sms',
        navigate: false,
        showPassword: false,
        tab: 0,
        error: false,
        // loaded: false
    });


    useEffect(() => {
        setState(states => ({...states, loaded: true}));
    }, []);


    return (
        <section id="login">
            <div className="split">
                <div id="wrap">


                    <div id="title-bar">
                        <Typography variant="h5" gutterBottom component="div" id="auth-title">
                            {Translate('auth_giris_yap').toLocaleUpperCase('TR')}
                        </Typography>

                        <Typography variant="span" display="block" gutterBottom id="auth-title-info">
                            {Translate('auth_giris_info')}
                        </Typography>
                    </div>


                    {state.navigate===true &&
                        <IconButton
                            id="step-nav"
                            className={state.verifyStep ? 'right' : 'left'}
                            aria-label="toggle password visibility"
                            onClick={handleClickStepNav}
                            edge="end"
                        >
                            {state.verifyStep ? <ChevronLeft /> : <ChevronRight />}
                        </IconButton>
                    }


                    {state.error &&
                        <Alert severity="error">{Translate(state.error)}</Alert>
                    }

                    {state.verifyStep===false ?
                        <form onSubmit={formik.handleSubmit} id="auth-form">
                            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                                <Tabs value={state.tab} onChange={handleTabChange} aria-label="basic tabs example"
                                      variant="scrollable">
                                    <Tab label={Translate('auth_email_adresi_ile_giris').toLocaleUpperCase('TR')} {...a11yProps(0)} />
                                    <Tab label={Translate('auth_telefon_numarasi_ile_giris').toLocaleUpperCase('TR')} {...a11yProps(1)} />
                                    <Tab label={Translate('auth_tc_kimlik_ile_giris').toLocaleUpperCase('TR')} {...a11yProps(2)} />
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
                                    htmlFor="password">{Translate('auth_sifreniz')}</InputLabel>
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

                            <Button id="submit-form" fullWidth type="submit" onSubmit={formik.handleSubmit} variant="outlined">
                                {state.loaded===true ? Translate('auth_giris_yap').toLocaleUpperCase('TR') : <CircularProgress />}
                            </Button>
                        </form>
                        : <form onSubmit={verifyFormik.handleSubmit} id="auth-form" className="verify-step">
                            <FormControl variant="outlined">
                                {/*<InputLabel htmlFor="sms">{Translate('auth_alert_sms_kodu')}</InputLabel>*/}
                                <FormHelperText className="verify-input-title" variant="outlined" error={verifyFormik.touched.sms && Boolean(verifyFormik.errors.sms)}>{Translate(state.method==='authenticator' ? 'auth_alert_authenticator_kodu' : 'auth_alert_sms_kodu')}</FormHelperText>

                                {state.method==='authenticator' ?
                                    <ReactCodeInput isValid={verifyFormik.touched.authenticator && !Boolean(verifyFormik.errors.authenticator)} type='number' id="authenticator" fields={6} {...codeInput} value={verifyFormik.values.authenticator} onChange={e => verifyFormik.setFieldValue('authenticator',e)} />
                                    :
                                <ReactCodeInput isValid={verifyFormik.touched.sms && !Boolean(verifyFormik.errors.sms)} type='number' id="sms" fields={5} {...codeInput} value={verifyFormik.values.sms} onChange={e => verifyFormik.setFieldValue('sms',e)} />
                                }


                                <FormHelperText className="verify-input-text" error={verifyFormik.touched.authenticator && Boolean(verifyFormik.errors.authenticator)}>{verifyFormik.touched.authenticator && verifyFormik.errors.authenticator}</FormHelperText>

                                <FormHelperText className="verify-input-text" error={verifyFormik.touched.sms && Boolean(verifyFormik.errors.sms)}>{verifyFormik.touched.sms && verifyFormik.errors.sms}</FormHelperText>
                            </FormControl>

                            <Button id="submit-form" fullWidth type="submit" onSubmit={verifyFormik.handleSubmit} variant="outlined">
                                {state.loaded===true ? Translate('auth_giris_yap').toLocaleUpperCase('TR') : <CircularProgress />}
                            </Button>
                        </form>
                    }


                </div>

            </div>
            <div id="banner-split" className="split">

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