import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { SwitchTransition, CSSTransition, TransitionGroup } from "react-transition-group";

import Home from './components/home/Home';
import Login from './components/login/Login';
import Profile from './components/profile/Profile';
import './styles/Routing.css';

//Utility class to handle Routing on Web-app
export default class Routing extends Component {
    
    render() {
        return (
            <BrowserRouter>
                <Route render={({ location }) => (

                    <TransitionGroup>
                        <CSSTransition key={location.key} timeout={400} classNames="route-fade">

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

                            </Switch>

                        </CSSTransition>
                    </TransitionGroup>

                )} />
            </BrowserRouter>
        )
    }

}
