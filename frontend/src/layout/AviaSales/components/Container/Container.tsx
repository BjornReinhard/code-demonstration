import React, { FunctionComponent } from 'react';
import styles from './Container.module.css';
import cx from 'classnames';
import { motion } from 'framer-motion';

export const Container: FunctionComponent<any> = (props) => {
    return <motion.div variants={props.item} className={cx(styles.container, props.className)}>
        {props.children}
    </motion.div>;
};
