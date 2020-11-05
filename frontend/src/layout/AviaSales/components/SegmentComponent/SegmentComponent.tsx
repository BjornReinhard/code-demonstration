import React, { FunctionComponent } from 'react';
import styles from './SegmentComponent.module.css';
import { Segment } from "../../types";
import { Col } from 'react-flexbox-grid';
import dayjs from "dayjs";
import cx from "classnames";
import commonStyles from "../../../../common/common.module.css";

type SegmentComponentProps = {
    data: Segment
};

export const SegmentComponent: FunctionComponent<SegmentComponentProps> = props => {
    const {duration, date, origin, destination, stops} = props.data;
    const hours = Math.floor(duration / 60);
    const minutes = duration - 60 * hours;
    const takeOffTime = dayjs(date);
    const landingTime = dayjs(date).add(duration, 'm');
    return <div className={styles.container}>
        <Col xs={4} className={cx(commonStyles.noPadding)}>
            <div className={styles.item}>
                <span className={styles.title}>{origin} - {destination}</span>
                <span className={styles.value}>{takeOffTime.format('HH:mm')} - {landingTime.format('HH:mm')}</span>
            </div>
        </Col>
        <Col xs={4} className={cx(commonStyles.noPadding)}>
            <div className={styles.item}>
                <span className={styles.title}>DURATION</span>
                <span className={styles.value}>{hours + 'h'} {minutes ? minutes + 'm' : null}</span>
            </div>
        </Col>
        <Col xs={4} className={cx(commonStyles.noPadding)}>
            <div className={styles.item}>
                <span className={styles.title}>{stops.length > 0 ? stops.length + ' STOPS' : 'NONSTOP'} </span>
                <span className={styles.value}>{stops.join(', ')}</span>
            </div>
        </Col>
    </div>;
};
