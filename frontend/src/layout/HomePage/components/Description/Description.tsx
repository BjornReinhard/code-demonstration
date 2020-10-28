import React, { FunctionComponent } from 'react';
import styles from './Description.module.css';

export const Description: FunctionComponent<any> = () => {
    return <div className={styles.container}>
        <span>
            An experienced and senior professional with 10+ years in the IT industry.
        </span>
        <span>
            I work in complete system development life cycle using Agiile/Scrum methodology.
        </span>
        <span>
            Javascript, Typescript, React, NodeJS, Angular.
        </span>
    </div>;
};
