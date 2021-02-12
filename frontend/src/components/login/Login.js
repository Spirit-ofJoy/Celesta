import React from 'react';
import { Component } from 'react';

import './Login.css';

class Login  extends Component {

    processLogin = () => {
        console.log(document.getElementById('uname-fld').value);
        console.log(document.getElementById('passwd-fld').value);
    }

    render() {
        return (
            <div className="login-page-container">
                <div className="login-header">
                    <div className="login-name-and-waves">
                        <div className="login-inner-header" id="login-flexbx">
                            <div className="login-name"><br /><br /><br /><br /><br /><br /><br />
                                <h1>KRAYA-ANTI</h1><br />
                                <h2>BECAUSE EVERYTHING HAS A <br />NEW BEGINNING</h2>
                            </div>
                        </div>
                        {/*Waves Container*/}
                        <div>
                            <svg className="login-waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                                <defs>
                                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                                </defs>
                                <g className="login-parallax">
                                    <use xlinkHref="#gentle-wave" x={4} y={0} fill="rgba(255,255,255,0.7)" />
                                    <use xlinkHref="#gentle-wave" x={4} y={3} fill="rgba(255,255,255,0.5)" />
                                    <use xlinkHref="#gentle-wave" x={4} y={5} fill="rgba(255,255,255,0.3)" />
                                    <use xlinkHref="#gentle-wave" x={4} y={7} fill="#fff" />
                                </g>
                            </svg>
                        </div>
                        {/*Waves end*/}
                    </div>
                </div>
                <div className="login-main-card">
                    <div className="login-main-top-block1" />
                    <div className="login-main-top-block2"> </div>
                    <div className="login-main-title">
                        <h1>User Login</h1>
                    </div>
                    <div className="login-main-input-block">
                        <div className="login-main-block"><i className="login-main-fas fa-user-alt" /><input className="login-main-txtfld" placeholder="Username" id="uname-fld"/></div>
                        <div className="login-main-block"><i className="login-main-fas fa-lock" /><input type="password" className="login-main-txtfld" placeholder="Password" id="passwd-fld"/></div>
                        <button id="login-main-btn" onClick={ () => this.processLogin() }>Proceed</button>
                    </div>
                    <div className="login-main-link-block">
                        <div className="login-main-block">
                            <div className="login-main-link">Don't have a registered account?</div>
                        </div>
                    </div>
                    <div className="login-main-link-block">
                        <div className="login-main-block">
                            <div className="login-main-linking"><a href="https://google.com" id="Signup-linking">Redirect to Sign-Up</a></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}  

export default Login;