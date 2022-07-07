import React, {memo} from "react"
import {connect} from "../../components/context";
import Main from "../index";
import {useRouter} from "next/router";
import Login from "./Login";


const Auth = memo(function Auth(props){

    const {path} = props;

    console.log(path);

    switch (path){
        case '/auth/giris-yap':
            if(props.site.user.isLogin===true) {
                return <>HESABIM</>;
            }
            return <Login />

        case '/auth/yeni-uyelik':
            return ;

        case '/hesabim':
            return <>HESABIM</>;
    }

    if(path==="/auth/giris-yap"){

        return <Login />
    }

    // return <Main {...props} />;
});


const mapStateToProps = state => {
    return {
        site: state.site,
    };
};
export default connect(mapStateToProps)(Auth);