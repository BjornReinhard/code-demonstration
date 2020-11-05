import React, { FunctionComponent } from 'react';
import styles from './Tickets.module.css';
import { TicketComponent, TOGGLER } from "../index";
import { Segment, Ticket } from "../../types";

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
    const filterTicketsByStops = props.tickets.filter(ticket => {
        return ticket.segments.every((segment: Segment) => {
            return props.stops.indexOf(segment.stops.length) > -1;
        })
    });
    const sortedTickets = props.togglerOption === TOGGLER.CHEAPEST ? sortDescByPrice(filterTicketsByStops) : sortDescByDuration(filterTicketsByStops);
    return <div className={styles.container}>
        {sortedTickets.slice(0, 5).map((ticket, index) => {
            return <TicketComponent key={index} data={ticket}/>
        })}
    </div>;
};
