import React from 'react';
import styles from './App.module.css';
import {motion} from "framer-motion";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Projects from "./layout/Projects/Projects";

function App() {
    return (
        <motion.div initial={{
            opacity: 0,
            y: 30
        }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', ease: "easeOut", duration: 1, delay: 0.35, bounce: 0.25 }}
            className={styles.main} role="main">
            <motion.span initial={{
                opacity: 0
            }} animate={{opacity: 1}} transition={{type: 'spring', ease: "easeOut", duration: 1, delay: 1}}>
                Code demonstration project
            </motion.span>

            {/*<Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                    </ul>

                    <hr/>
                    <Switch>
                        <Route exact path="/">
                            <div>Nothing</div>
                        </Route>
                        <Route path="/projects">
                            <Projects/>
                        </Route>
                    </Switch>
                </div>
            </Router>*/}
        </motion.div>
    );
}

export default App;
