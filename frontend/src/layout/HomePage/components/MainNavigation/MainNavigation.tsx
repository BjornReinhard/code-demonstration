import React, { FunctionComponent } from "react";
import styles from "./MainNavigation.module.css";
import { Link } from "react-router-dom";

export const MainNavigation: FunctionComponent<any> = () => {
    return <ul className={styles.mainNavList}>
        <li>
            <Link className={styles.navLink} to="/projects">Github</Link>
        </li>
        <li>
            <Link className={styles.navLink} to="/projects">Projects</Link>
        </li>
    </ul>;
}
