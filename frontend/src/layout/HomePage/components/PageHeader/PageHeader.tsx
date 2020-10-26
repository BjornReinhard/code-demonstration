import React from "react";
import styles from './PageHeader.module.css';
import {MainNavigation} from "..";

export function PageHeader() {
    return <div className={styles.pageHeader}>
        <MainNavigation/>
    </div>;
}
