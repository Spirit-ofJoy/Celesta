import React from 'react';
import { Component } from 'react';
import { Route, NavLink, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";

import EditProfile from './pages/profile/Profile';
import AddItem from './pages/items/Items';
import Catalogue from './pages/price/Price';
import Welcome from './Welcome';
import './Distributorboard.css';

class Distributorboard extends Component {

    constructor() {
        super();

        this.state = {
            
        }
    }

    render() {

        return (
            
            <div id="distributor-page-container">
                <div className="distributor-navbar">
                    <NavLink exact to="/distributor" className="back-to-home-distributor"><i className="ri-home-2-fill back-to-home-icon"></i></NavLink>
                    <NavLink exact to="/distributor/profile" activeClassName="active-clicked">Edit Profile Details</NavLink>
                    <NavLink exact to="/distributor/items" activeClassName="active-clicked">Add Items to our selection</NavLink>
                    <NavLink exact to="/distributor/catalogue" activeClassName="active-clicked">Modify my Catalogue</NavLink>
                    <button className="settings-dashboard-distributor"><i className="ri-settings-3-fill"></i></button>
                </div>

                <div className="distributor-main-container" >
                    <AnimatePresence exitBeforeEnter>
                        <Switch location={this.props.location} key={this.props.location.pathname}>

                            <Route exact path="/distributor" >
                                <motion.div initial="out" animate="in" exit="exit" variants={distributorPageVariants} transition={distributorPageTransitions}> <Welcome /> </motion.div>
                            </Route> 

                            <Route path="/distributor/profile" >
                                <motion.div initial="out" animate="in" exit="exit" variants={distributorPageVariants} transition={distributorPageTransitions}> <EditProfile /> </motion.div>
                            </Route> 

                            <Route path="/distributor/items" >
                                <motion.div initial="out" animate="in" exit="exit" variants={distributorPageVariants} transition={distributorPageTransitions}> <AddItem /> </motion.div>
                            </Route> 

                            <Route path="/distributor/catalogue" >
                                <motion.div initial="out" animate="in" exit="exit" variants={distributorPageVariants} transition={distributorPageTransitions}> <Catalogue /> </motion.div>
                            </Route> 
                            
                        </Switch>
                    </AnimatePresence>
                    
                </div>
            </div>
        );
    }
}

const distributorPageVariants = {
    in: {
        opacity: 1,
        y: 0,
        scale: 1
    },
    out: {
        opacity: 0,
        y: "-100vh",
        scale: 0.8
    }, 
    exit: {
        opacity: 0,
        y: "100",
        scale: 0.8
    }
}

const distributorPageTransitions = {
    duration: 0.9,
    type: "spring",
    ease: "easeIn",
    transition: "linear"
}

export default Distributorboard;