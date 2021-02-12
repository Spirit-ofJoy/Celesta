import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from './components/home/Home';
import Login from './components/login/Login';

//Utility class to handle Routing on Web-app
export default class Routing extends Component {
    
    render() {
        return (
            <BrowserRouter>
                <Switch>

                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route path="/login">
                        <Login />
                    </Route>
                    
                </Switch>
            </BrowserRouter>
        )
    }

}
