import React, { FunctionComponent } from 'react';
import styles from './Name.module.css';

export const Name: FunctionComponent<any> = () => {
    return <div className={styles.container}>
        <div className={styles.name}>Daniil Stepanov</div>
        <div className={styles.title}>Full-stack developer</div>
    </div>;
};
