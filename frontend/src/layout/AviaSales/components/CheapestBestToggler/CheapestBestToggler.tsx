import React, { FunctionComponent, useState } from 'react';
import styles from './CheapestBestToggler.module.css';
import cx from 'classnames';

export const TOGGLER = {
    CHEAPEST: 0,
    FASTEST: 1
};

type CheapestBestTogglerProps = {
    handleTogglerSwitch: (value: number) => void
};

export const CheapestBestToggler: FunctionComponent<CheapestBestTogglerProps> = props => {
    const [active, setActive] = useState<number>(TOGGLER.CHEAPEST);
    const handleClick = (value: number) => {
        setActive(value);
        props.handleTogglerSwitch(value);
    };
    return <ul className={styles.container}>
        <li onClick={() => handleClick(TOGGLER.CHEAPEST)}
            className={cx({[styles.cheapest]: true, [styles.active]: active === TOGGLER.CHEAPEST})}>CHEAPEST
        </li>
        <li onClick={() => handleClick(TOGGLER.FASTEST)}
            className={cx({[styles.fastest]: true, [styles.active]: active === TOGGLER.FASTEST})}>FASTEST</li>
    </ul>;
};
