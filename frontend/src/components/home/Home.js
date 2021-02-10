import React from 'react';
import { Component } from 'react';

import './Home.css';

class Home extends Component {

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
                                <div className="home-subcard"></div>
                            </div>
                            <div className="home-card">
                                <h6>Hi click this shit.</h6>
                                <button type="button" className="btn btn-primary">Primary</button>
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

