import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage, Projects } from "../../../layout";

export const AppRouting: FunctionComponent<any> = () => {
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
