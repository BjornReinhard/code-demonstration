export type Segment = {
    origin: string;
    destination: string;
    date: string;
    stops: string[];
    duration: number;
}
export interface Ticket {
    price: number;
    carrier: string;
    segments: Segment[]
}

export interface TicketsResponse {
    tickets: Ticket[];
    stop: boolean;
}

export interface TicketsError {
    error: any;
}
