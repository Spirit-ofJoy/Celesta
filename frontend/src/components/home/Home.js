import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

class Home extends Component {

    signupBtnClick() {
        console.log("Signup clicked!");
    }

    render() {
        return (
            <div className="display-container">
                <div className='light x1'></div>
                <div className='light x2'></div>
                <div className='light x3'></div>
                <div className='light x4'></div>
                <div className='light x5'></div>
                <div className='light x6'></div>
                <div className='light x7'></div>
                <div className='light x8'></div>
                <div className='light x9'></div>

                <div className="content-container">
                    <div className="home-container">
                        <div className="home-content">
                            <div className="home-card">
                                <div className="home-subcard-1">
                                    <div className="details">
                                        <div className="center">
                                            <h1>Sign-In with an existing account<br /></h1>
                                            <Link to="/login"><button type="button" className="btn btn-danger"  id="home-login-btn" >Proceed to Login</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="home-card">
                            <div className="home-subcard-2">
                                    <div className="details">
                                        <div className="center">
                                            <h1>Register and make a new account<br /></h1>
                                            <Link to="/signup"><button type="button" className="btn btn-success"  id="home-signup-btn" >Proceed to Sign up</button></Link>
                                        </div>
                                    </div>
                                </div>                                
                            </div>
                        </div>

                        <div className="home-flap"></div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Home;

