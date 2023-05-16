import add from 'date-fns/add';
import format from 'date-fns/format';
import ru from 'date-fns/locale/ru';

import cl from './ticket.module.scss';

const formatDateRu = (date) => format(new Date(date), 'p', { locale: ru });
const formatMinutesToHHMM = (minutes) => {
  const timeHours = Math.trunc(minutes / 60);
  const timeMinutes = Math.trunc(minutes - timeHours * 60);
  return `${timeHours}ч ${timeMinutes}м`;
};
const priceFormatter = new Intl.NumberFormat('ru-RU', {
  style: 'currency',
  currency: 'RUB',
  maximumSignificantDigits: 6,
});

const Ticket = ({ carrier, price, segments }) => {
  const segmentList = segments.map((seg, index) => {
    const { date, duration, origin, destination, stops } = seg;
    const arriveDate = add(new Date(date), { minutes: duration });
    const durInTime = formatMinutesToHHMM(duration);
    let transfersCount;

    switch (stops.length) {
      case 0:
        transfersCount = `${stops.length} пересадок`;
        break;
      case 1:
        transfersCount = `${stops.length} пересадка`;
        break;
      default:
        transfersCount = `${stops.length} пересадки`;
        break;
    }

    return (
      <li key={index} className={cl.ticket__segment}>
        <div className={cl.ticket__column}>
          <div className={cl.ticket__row}>
            {origin} – {destination}
          </div>
          <div className={cl.ticket__row}>
            {formatDateRu(date)} – {formatDateRu(arriveDate)}
          </div>
        </div>
        <div className={cl.ticket__column}>
          <div className={cl.ticket__row}>В пути</div>
          <div className={cl.ticket__row}>{durInTime}</div>
        </div>
        <div className={cl.ticket__column}>
          <div className={cl.ticket__row}>{transfersCount}</div>
          <div className={cl.ticket__row}>{stops.map((stop) => `${stop} `)}</div>
        </div>
      </li>
    );
  });

  return (
    <div className={cl.ticket}>
      <header className={cl.ticket__segment}>
        <div className={cl.ticket__price}>{priceFormatter.format(price)}</div>
        <img className={cl.ticket__logo} src={`//pics.avs.io/99/36/${carrier}.png`} alt={carrier} />
      </header>
      <ul className={cl.ticket__transferInfo}>{segmentList}</ul>
    </div>
  );
};

export default Ticket;
