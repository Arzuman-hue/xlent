import React from "react";

export default function Logo() {
    return (
        <div className='col-md-5 offset-1'>
            <div style={{marginBottom: '55px'}}>
                <img src={process.env.PUBLIC_URL + '/images/logo-3 1.png'} alt='logo'/>
            </div>
            <div>
                <img src={process.env.PUBLIC_URL + '/images/lent.png'} alt='logo'/>
            </div>
        </div>
    )
}