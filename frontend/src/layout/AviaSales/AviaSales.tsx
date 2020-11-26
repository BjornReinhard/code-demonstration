import React, { FunctionComponent, useState } from 'react';
import { Col, Grid, Row } from 'react-flexbox-grid';
import logo from "./Logo.svg";

import styles from './AviaSales.module.css';
import commonStyles from '../../common/common.module.css';
import { Container, StopsComponent, TicketsSection } from "./components";
import cx from "classnames";

export const AviaSales: FunctionComponent<any> = () => {
    const [stops, setStops] = useState<number[]>([0,1,2]);
    return <div className={styles.container}>
        <Grid>
            <Row center="xs" className={styles.logoRow}>
                <Col xs={12} md={12}>
                    <img src={logo} alt="logo"/>
                </Col>
            </Row>
            <Row center="xs">
                <Col xs={12} md={3}>
                    <Container className={cx(commonStyles.containerBottomMargin, styles.stopsContainer)}>
                        <StopsComponent setStops={setStops}/>
                    </Container>
                </Col>
                <Col xs={12} md={6}>
                    <TicketsSection stops={stops}/>
                </Col>
            </Row>
        </Grid>
    </div>;
};
