import React from 'react';
import styles from './App.module.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Projects from "./layout/Projects/Projects";

function App() {
    return (
        <div className={styles.main} role="main">
            Code demonstration project

            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                    </ul>

                    <hr />
                    <Switch>
                        <Route exact path="/">
                            <div>Nothing</div>
                        </Route>
                        <Route path="/projects">
                            <Projects />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
