import React, { FunctionComponent, useEffect, useState } from 'react';
import styles from './TicketsSection.module.css';
import { Tickets, CheapestBestToggler, TOGGLER } from "../index";
import { Ticket } from "../../types";
import axios from "axios";
import { requestTickets } from "../../recurrent-tickets-request.service";
import { ScaleLoader } from "react-spinners";

type TicketSectionProperties = {
    stops: number[]
};

export const TicketsSection: FunctionComponent<TicketSectionProperties> = props => {
    const [tickets, setTickets] = useState<Ticket[]>([]);
    const {stops} = props;
    const [togglerOption, setTogglerOption] = useState<number>(TOGGLER.CHEAPEST);

    useEffect(() => {
        const getSearchId = async () => {
            const {data: {searchId}} = await axios.get('https://front-test.beta.aviasales.ru/search');
            return searchId;
        };

        const getTickets = async () => {
            const searchId = await getSearchId();
            const _tickets: Ticket[] = await requestTickets(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`);
            setTickets(_tickets.flat());
        };

        getTickets();
    }, []);


    return <div className={styles.container}>
        <CheapestBestToggler handleTogglerSwitch={setTogglerOption}/>
        {
            stops.length === 0 && <span className={styles.noFilter}>
            We found {tickets.length} flights, but none of them match your filters.
        </span>
        }
        {
            tickets.length > 0 ? <Tickets tickets={tickets} togglerOption={togglerOption} stops={stops}/> :
                <div className={styles.loader}>
                    <ScaleLoader height={32} color={'#2196F3'} loading={true}/>
                </div>
        }
    </div>;
};
