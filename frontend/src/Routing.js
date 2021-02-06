import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from './components/home/Home';

//Utility class to handle Routing on Web-app
export default class Routing extends Component {
    
    render() {
        return (
            <BrowserRouter>
                <Switch>

                    <Route path="/">
                        <Home />
                    </Route>
                    
                </Switch>
            </BrowserRouter>
        )
    }

}
