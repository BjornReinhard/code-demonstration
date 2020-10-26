import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {HomePage, Projects} from "../../../layout";

export function AppRouting() {
    return <Router>
        <Switch>
            <Route exact path="/">
                <HomePage/>
            </Route>
            <Route path="/projects">
                <Projects/>
            </Route>
        </Switch>
    </Router>
}
