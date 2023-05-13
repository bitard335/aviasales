import { useState } from 'react';

import Filter from '../filter/filter';
import TicketList from '../ticketList/ticketList';

import cl from './app.module.scss';

const App = () => {
  const [ticketList, setTicketList] = useState([1, 2, 3, 4]);

  return (
    <div className={cl.app}>
      <header>
        <img src={require('../../img/Logo.png')} alt="logo" className={cl.app__logo} />{' '}
      </header>
      <main className={cl.app__main}>
        <Filter />
        <TicketList ticketList={ticketList} setTicketList={setTicketList} />
      </main>
    </div>
  );
};

export default App;
