import cl from './ticket.module.scss';

const Ticket = () => {
  return (
    <div className={cl.ticket}>
      <header className={cl.ticket__segment}>
        <div className={cl.ticket__price}>Price</div>
        <img className={cl.ticket__logo} src="" alt="company logo" />
      </header>
      <div className={cl.ticket__transferInfo}>
        <div className={cl.ticket__segment}>
          <div className={cl.ticket__column}>
            <div className={cl.ticket__row}>MOW – HKT</div>
            <div className={cl.ticket__row}>10:45 – 08:00</div>
          </div>
          <div className={cl.ticket__column}>
            <div className={cl.ticket__row}>В пути</div>
            <div className={cl.ticket__row}>21ч 15м</div>
          </div>
          <div className={cl.ticket__column}>
            <div className={cl.ticket__row}>2 пересадки</div>
            <div className={cl.ticket__row}>HKG, JNB</div>
          </div>
        </div>
        <div className={cl.ticket__segment}>
          <div className={cl.ticket__column}>
            <div className={cl.ticket__row}>MOW – HKT</div>
            <div className={cl.ticket__row}>10:45 – 08:00</div>
          </div>
          <div className={cl.ticket__column}>
            <div className={cl.ticket__row}>В пути</div>
            <div className={cl.ticket__row}>21ч 15м</div>
          </div>
          <div className={cl.ticket__column}>
            <div className={cl.ticket__row}>2 пересадки</div>
            <div className={cl.ticket__row}>HKG, JNB</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
