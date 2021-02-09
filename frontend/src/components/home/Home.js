import React from 'react';
import { Component } from 'react';

import './Home.css';

class Home extends Component {

    render() {
        return (
            <div className="home-container">
                <div className="home-content">
                    <button>To click</button>
                </div>
                <div className="home-flap">
                    <div className="home-subflap"></div>
                </div>
            </div>

        )
    }
}

export default Home;

