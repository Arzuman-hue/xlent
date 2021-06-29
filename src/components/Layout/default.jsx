import React from 'react';
import FormLogin from "../Form/Login/login";
import './default.css'
import Logo from "../logo/logo";

function Default() {
    return (
        <div className='layoutWrapper col-md-12 row align-items-center '>
            <Logo/>
            <FormLogin/>
        </div>
    )
}

export default Default