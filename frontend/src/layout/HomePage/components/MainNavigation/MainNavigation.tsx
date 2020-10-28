import React, { FunctionComponent } from "react";
import styles from "./MainNavigation.module.css";
import { Link } from "react-router-dom";

export const MainNavigation: FunctionComponent<any> = () => {
    return <ul className={styles.mainNavList}>
        <li>
            <a target="_blank" href="https://github.com/BjornReinhard" rel="noopener noreferrer" className={styles.navLink}>Github</a>
        </li>
        <li>
            <Link className={styles.navLink} to="/projects">Projects</Link>
        </li>
    </ul>;
}
