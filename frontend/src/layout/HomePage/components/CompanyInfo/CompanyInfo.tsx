import React, { FunctionComponent } from 'react';
import styles from './CompanyInfo.module.css';

export const CompanyInfo: FunctionComponent<any> = () => {
    return <div className={styles.container}>
        <div className={styles.position}>Senior Software Developer <a className={styles.company}
                                                                      href="https://www.luxoft.com/">@ Luxoft</a></div>
        <div className={styles.location}>Houston, TX, USA</div>
    </div>;
};
