import Filter from '../filter/filter';
import TicketList from '../ticketList/ticketList';
import logoSvg from '../../img/Logo.svg';

import cl from './app.module.scss';

const App = () => {
  return (
    <div className={cl.app}>
      <header>
        <img src={logoSvg} alt="logo" className={cl.app__logo} />{' '}
      </header>
      <main className={cl.app__main}>
        <Filter />
        <TicketList />
      </main>
    </div>
  );
};

export default App;
