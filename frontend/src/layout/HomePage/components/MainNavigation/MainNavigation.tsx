import React from "react";
import styles from "./MainNavigation.module.css";
import {Link} from "react-router-dom";

export function MainNavigation() {
    return <ul className={styles.mainNavList}>
        <li>
            <Link className={styles.navLink} to="/projects">Github</Link>
        </li>
        <li>
            <Link className={styles.navLink} to="/projects">Projects</Link>
        </li>
    </ul>;
}
