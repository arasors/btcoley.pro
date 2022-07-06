import axios from "axios";
const APIURL = process.env.API_HOST;


async function login(email, password, country, phone, tckn, type) {

    let result = null;
    let data;
    if(type==="email" || type==="1"){
        data = {
            type: "email",
            email:email,
            password
        }
    }
    if(type==="phone" || type==="2"){
        data = {
            type: "phone",
            country: country,
            phone:phone,
            password
        }
    }
    if(type==="tckn" || type==="3"){
        data = {
            type: "tckn",
            tckn: tckn,
            password
        }
    }
    await axios
        .post(APIURL + "/auth/login", data)
        .then(res => {
            result = res;
        });
    return result;
}
async function logout(token) {
    let result = null;
    await axios
        .post(APIURL + "/auth/logout", null, {
            headers: {
                Bearer: token
            }
        })
        .then(res => {
            result = res;
        });
    return result;
}

async function register(
    name,
    surname,
    email,
    phone_number,
    identity_number,
    password,
    c_password,
    accept_terms,
    yearofbirth,
    country
) {
    let result = null;
    await axios
        .post(APIURL + "/auth/register", {
            first_name: name,
            last_name: surname,
            email: email,
            phone: phone_number,
            id_number: identity_number,
            password: password,
            c_password: c_password,
            birthday: yearofbirth,
            country: country,
            accept_terms: accept_terms
            //TODO ADD OTHER TEMRS TOO - MUST BE ADDED TO THE SERVICE
        })
        .then(res => {
            result = res;
        });
    return result;
}
async function smsConfirm(user_email, user_phone, user_country, user_tckn, type, code, login = false) {
    let result = null;
    let data;
    if(type==="email" || type==="1"){
        data = {
            user_email: user_email,
            code: code,
            type: "email",
            login
        }
    }
    if(type==="phone" || type==="2"){
        data = {
            user_country: user_country,
            user_phone: user_phone,
            type: "phone",
            code: code,
            login
        }
    }
    if(type==="tckn" || type==="3"){
        data = {
            user_tckn: user_tckn,
            code: code,
            type: "tckn",
            login
        }
    }

    await axios
        .post(APIURL + "/auth/sms_verify", data)
        .then(res => {
            result = res;
        });
    return result;
}

async function authenticatorConfirm(user_email, phone, country, tckn, type, code, login = false) {
    let result = null;
    let data;
    if(type==="email" || type==="1"){
        data = {
            user_email: user_email,
            type: "email",
            twoFACode: code,
            login
        }
    }
    if(type==="phone" || type==="2"){
        data = {
            user_country: country,
            user_phone: phone,
            type: "phone",
            twoFACode: code,
            login
        }
    }
    if(type==="tckn" || type==="3"){
        data = {
            user_tckn: tckn,
            type: "tckn",
            twoFACode: code,
            login
        }
    }

    await axios
        .post(APIURL + "/security/2fa/check", data)
        .then(res => {
            result = res;
        });
    return result;
}

export {
    login,
    logout,
    register,
    smsConfirm,
    authenticatorConfirm
}