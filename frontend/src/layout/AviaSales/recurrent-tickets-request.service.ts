import axios from 'axios';
import { Ticket, TicketsError, TicketsResponse } from "./types";

function* request(url: string): IterableIterator<Promise<TicketsResponse & TicketsError>> {
    while (true) {
        yield axios.get(url).then(response => {
            return response.data;
        }).catch(error => {
            return {error};
        })
    }
}

function makeRecurrentCall(url: string, tickets: any[], resolve: (value?: (PromiseLike<any> | any)) => void, reject: (reason?: any) => void) {
    const response = request(url);
    const next = response.next();

    next.value.then((nextResponse: TicketsResponse & TicketsError) => {
        if (nextResponse.hasOwnProperty('tickets')) {
            tickets.push(nextResponse.tickets);
            if (nextResponse.stop) {
                resolve(tickets);
                return;
            }
        }
        makeRecurrentCall(url, tickets, resolve, reject);
    });
}

export function requestTickets(url: string): Promise<Ticket[]> {
    const tickets: any[] = [];
    return new Promise((resolve, reject) => {
        makeRecurrentCall(url, tickets, resolve, reject);
    });
}
