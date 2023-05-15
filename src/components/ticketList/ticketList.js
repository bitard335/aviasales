import { useSelector } from 'react-redux';

import Tabs from '../tabs/tabs';
import Ticket from '../ticket/ticket';

import cl from './ticketList.module.scss';

const TicketList = () => {
  const ticketList = useSelector((state) => state.tickets.tickets);

  const elements = ticketList.map((ticket, index) => {
    return (
      <li key={index}>
        <Ticket />
      </li>
    );
  });

  return (
    <ul className={cl.ticketList}>
      <Tabs />
      {elements}
    </ul>
  );
};

export default TicketList;
