import React, { FunctionComponent } from "react";
import styles from './PageHeader.module.css';
import { Name } from "../Name";
import { CompanyInfo } from "../CompanyInfo";

export const PageHeader: FunctionComponent<any> = () => {
    return <div className={styles.pageHeader}>
        <Name/>
        <CompanyInfo/>
    </div>;
}
