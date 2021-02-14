import React from 'react';
import { Component } from 'react';
import { Route, NavLink, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";

import EditProfile from './pages/profile/Profile';
import AddItem from './pages/items/Items';
import ChangePrice from './pages/price/Price';
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
                    <NavLink exact to="/distributor/profile" activeClassName="active-clicked">Edit Profile Details</NavLink>
                    <NavLink exact to="/distributor/items" activeClassName="active-clicked">Add Items to my selection</NavLink>
                    <NavLink exact to="/distributor/price" activeClassName="active-clicked">Modify Price</NavLink>
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

                            <Route path="/distributor/price" >
                                <motion.div initial="out" animate="in" exit="exit" variants={distributorPageVariants} transition={distributorPageTransitions}> <ChangePrice /> </motion.div>
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