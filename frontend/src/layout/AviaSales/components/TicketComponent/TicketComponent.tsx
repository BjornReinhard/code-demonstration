import React, { FunctionComponent } from 'react';
import styles from './TicketComponent.module.css';
import commonStyles from '../../../../common/common.module.css';
import { Container } from "../index";
import { Col, Row } from 'react-flexbox-grid';
import { Ticket } from "../../types";
import { SegmentComponent } from "../SegmentComponent";

import cx from 'classnames';

type TicketComponentProps = {
    data: Ticket
};

export const TicketComponent: FunctionComponent<TicketComponentProps> = props => {
    const imgUrl = `http://pics.avs.io/99/36/${props.data.carrier}.png`;

    return <Container className={commonStyles.containerBottomMargin}>
        <div className={styles.container}>
            <Row className={commonStyles.rowReset}>
                <Col xs={6} sm={6} md={5} lg={4} className={cx(commonStyles.noPadding)}><span className={styles.price}>{props.data.price} RUB </span></Col>
                <Col xs={6} sm={6} md={5} lg={4} lgOffset={4} mdOffset={2} className={cx(commonStyles.noPadding)}><img src={imgUrl} alt="ticket carrier"/></Col>
            </Row>
            {
                props.data.segments.map((segment, index) => {
                    return <Row key={index} className={commonStyles.rowReset}>
                        <SegmentComponent data={segment}/>
                    </Row>
                })
            }
        </div>
    </Container>;
};
