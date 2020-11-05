import React, { FunctionComponent } from 'react';
import styles from './Container.module.css';
import cx from 'classnames';

export const Container: FunctionComponent<any> = (props) => {
    return <div className={cx(styles.container, props.className)}>
        {props.children}
    </div>;
};
