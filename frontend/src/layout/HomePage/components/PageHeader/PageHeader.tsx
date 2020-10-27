import React, { FunctionComponent } from "react";
import styles from './PageHeader.module.css';
import { MainNavigation } from "..";

export const PageHeader: FunctionComponent<any> = () => {
    return <div className={styles.pageHeader}>
        <MainNavigation/>
    </div>;
}
