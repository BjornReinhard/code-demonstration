import React, { FunctionComponent, useEffect, useState } from 'react';
import styles from './Tickets.module.css';
import { TicketComponent, TOGGLER } from "../index";
import { Segment, Ticket } from "../../types";
import { AnimatePresence, motion } from 'framer-motion';

const container = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.09
        }
    }
}

const item = {
    hidden: {opacity: 0},
    show: {opacity: 1}
}

type TicketsProps = {
    tickets: Ticket[],
    togglerOption: number,
    stops: number[]
}

const sortDescByPrice = (tickets: Ticket[]) => {
    return tickets.sort((a: Ticket, b: Ticket) => a.price - b.price);
};

const sumAllFlightsDuration = (segments: Segment[]): number => {
    return segments.reduce<number>((prev: number, next: Segment): number => {
        return prev + next.duration;
    }, 0);
};

const sortDescByDuration = (tickets: Ticket[]) => {
    return tickets.sort((a: Ticket, b: Ticket) => sumAllFlightsDuration(a.segments) - sumAllFlightsDuration(b.segments));
};

export const Tickets: FunctionComponent<TicketsProps> = props => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        setIsVisible(false);
        console.log('false');
        const timer = setTimeout(() => {
            setIsVisible(true)
        }, 300);
        return () => {clearTimeout(timer)}
    }, [props.stops, props.togglerOption]);

    const filterTicketsByStops = props.tickets.filter(ticket => {
        return ticket.segments.every((segment: Segment) => {
            return props.stops.indexOf(segment.stops.length) > -1;
        })
    });
    const sortedTickets = props.togglerOption === TOGGLER.CHEAPEST ? sortDescByPrice(filterTicketsByStops) : sortDescByDuration(filterTicketsByStops);
    return <AnimatePresence exitBeforeEnter={true}>
        {
            isVisible && <motion.div variants={container} initial={"hidden"} animate={"show"} exit={"hidden"}
                        className={styles.container}>
                {sortedTickets.slice(0, 5).map((ticket, index) => {
                    return <TicketComponent item={item} key={index} data={ticket}/>
                })}
            </motion.div>
        }
    </AnimatePresence>;
};
