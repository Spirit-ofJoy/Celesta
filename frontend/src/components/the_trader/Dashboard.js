import React from 'react';
import { Component } from 'react';
import { Route, NavLink, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";

import Browse from './pages/browse/Browse';
import Details from './pages/details/Details';
import PreviousOrders from './pages/prev-orders/PreviousOrders';
import ToDoList from './pages/to-do/ToDo';
import Welcome from './Welcome';
import './Dashboard.css';

class Dashboard extends Component {

    constructor() {
        super();

        this.state = {
            
        }
    }

    render() {

        return (
            
            <div id="trader-page-container">
                <div className="trader-navbar">
                    <NavLink exact to="/trader" className="back-to-home"><i className="ri-home-2-fill back-to-home-icon"></i></NavLink>
                    <NavLink exact to="/trader/details" activeClassName="active-clicked">My Details</NavLink>
                    <NavLink exact to="/trader/browse" activeClassName="active-clicked">Browse</NavLink>
                    <NavLink exact to="/trader/prev_orders" activeClassName="active-clicked">Previous Orders</NavLink>
                    <NavLink exact to="/trader/toDo" activeClassName="active-clicked">To-Do List</NavLink>
                    <button className="settings-dashboard"><i className="ri-settings-3-fill settings-icon"></i></button>
                </div>

                <div className="trader-main-container" >
                    <AnimatePresence exitBeforeEnter>
                        <Switch location={this.props.location} key={this.props.location.pathname}>

                            <Route exact path="/trader" >
                                <motion.div initial="out" animate="in" exit="exit" variants={traderPageVariants} transition={traderPageTransitions}> <Welcome /> </motion.div>
                            </Route> 

                            <Route path="/trader/details" >
                                <motion.div initial="out" animate="in" exit="exit" variants={traderPageVariants} transition={traderPageTransitions}> <Details /> </motion.div>
                            </Route> 

                            <Route path="/trader/browse" >
                                <motion.div initial="out" animate="in" exit="exit" variants={traderPageVariants} transition={traderPageTransitions}> <Browse /> </motion.div>
                            </Route>

                            <Route path="/trader/prev_orders" >
                                <motion.div initial="out" animate="in" exit="exit" variants={traderPageVariants} transition={traderPageTransitions}> <PreviousOrders /> </motion.div>
                            </Route>

                            <Route path="/trader/toDo" >
                                <motion.div initial="out" animate="in" exit="exit" variants={traderPageVariants} transition={traderPageTransitions}> <ToDoList /> </motion.div>
                            </Route>
                            
                        </Switch>
                    </AnimatePresence>
                    
                </div>
            </div>
        );
    }
}

const traderPageVariants = {
    in: {
        opacity: 1,
        x: 0,
        scale: 1
    },
    out: {
        opacity: 0,
        x: "-100vw",
        scale: 0.8
    }, 
    exit: {
        opacity: 0,
        x: "100vw",
        scale: 0.8
    }
}

const traderPageTransitions = {
    duration: 0.9,
    type: "spring",
    ease: "easeIn",
    transition: "linear"
}

export default Dashboard;