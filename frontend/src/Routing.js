import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { SwitchTransition, CSSTransition, TransitionGroup } from "react-transition-group";

import Home from './components/home/Home';
import Login from './components/login/Login';
import Profile from './components/profile/Profile';
import Trader from './components/the_trader/Dashboard';
import Distributor from './components/the_distributor/Distributorboard';
import './styles/Routing.css';

//Utility class to handle Routing on Web-app
export default class Routing extends Component {
    
    render() {
        return (
            <BrowserRouter>
                <Route render={({ location }) => (

                            <Switch classNames="route-page" location={location}>

                                <Route exact path="/" >
                                    <Home />
                                </Route>

                                <Route path="/login">
                                    <Login />
                                </Route>

                                <Route path="/profile">
                                    <Profile distributor='distrib_id'/>
                                </Route>

                                <Route path="/trader">
                                    <Trader location={location}/>
                                </Route>

                                <Route path="/distributor">
                                    <Distributor location={location}/>
                                </Route>

                            </Switch>

                )} />
            </BrowserRouter>
        )
    }

}
