import React, { useState} from "react";
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import {MDBContainer, MDBRow, MDBCol} from 'mdbreact';
import {Button} from "react-bootstrap";
import "./login.css";

export default function FormLogin({}) {

    const [checkedIconShow, setCheckedIconShow] = useState(true);

    const iconToggleChecked = () => {
        setCheckedIconShow(!checkedIconShow)
    }

    return (
        <MDBContainer className='MDBContainerForm col-md-5 d-flex align-items-center'>
            <MDBRow className='col-md-12'>
                <MDBCol className='col-md-9 offset-md-1'>
                    <div >
                        <h4 className='text-start headerTxtStyle'>
                            Hi There!
                        </h4>
                        <form>
                            <input
                                   type="email"
                                   id="defaultFormLoginEmailEx"
                                   className="form-control emailStyle"
                                   placeholder='Username or email'
                            />
                            <br/>
                            <input type="password"
                                   id="defaultFormLoginPasswordEx"
                                   className="form-control passwordStyle"
                                   placeholder='Password'
                            />
                            <div className='loginCheckboxStyle'>
                                <div className='checkBoxWrapper' onClick={iconToggleChecked}>
                                    <div className="empty-circle">
                                        {checkedIconShow ?
                                            <i className="fa fa-check-circle fa-2x checkboxIStyle">
                                            </i>
                                            :
                                            null
                                        }
                                    </div>
                                    <span className='rememberSpanStyle'>Remember me</span>
                                </div>
                                <div>
                                    <Router>
                                        <Route>
                                            <NavLink className='linkToProblemsLogin' to='/'>
                                                Problems with login?
                                            </NavLink>
                                        </Route>
                                    </Router>
                                </div>
                            </div>
                            <Button className='col-md-12 logBtnStyle' type="submit">
                                Login
                                <i className="fa fa-arrow-right fa-1x faIconStyle">
                                </i>
                            </Button>
                            <NavLink to='/' className='createAccountStyle'>
                                Create an account?
                            </NavLink>
                        </form>
                    </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}