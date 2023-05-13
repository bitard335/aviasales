import Tabs from '../tabs/tabs';
import Ticket from '../ticket/ticket';

import cl from './ticketList.module.scss';

const TicketList = ({ ticketList }) => {
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
