import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Alert, Spin } from 'antd';

import Tabs from '../tabs/tabs';
import Ticket from '../ticket/ticket';
import { fetchTickets } from '../../store/reducers/ticketSlice';
import { sortedFilteredList } from '../../helpers/sortedFilteredList';

import cl from './ticketList.module.scss';

const TicketList = () => {
  const [maxVisible, setMaxVisible] = useState(5);

  const dispatch = useDispatch();
  const ticketState = useSelector((state) => state.tickets);

  const { tickets, isError, isLoading, sort, transferFilter } = ticketState;
  const sortedFilteredTickets = sortedFilteredList(tickets, sort, transferFilter);

  const visibleTickets = sortedFilteredTickets.slice(0, maxVisible);

  useEffect(() => {
    dispatch(fetchTickets());
  }, []);

  const onClickHandler = () => {
    setMaxVisible(maxVisible + 5);
  };

  const elements = visibleTickets.map((ticket, index) => {
    const { ...rest } = ticket;

    return (
      <li key={index}>
        <Ticket {...rest} />
      </li>
    );
  });

  const isEmpty = elements.length == 0;
  const errorPlug = isError ? <Alert message="Ошибка загрузки" type="error" /> : null;
  const loadingPlug = isLoading ? <Spin size="large" /> : null;
  const elementsPlug = !isEmpty ? elements : <Alert message="Список пуст" type="info" />;

  return (
    <ul className={cl.ticketList}>
      <Tabs setMaxVisible={setMaxVisible} />
      {loadingPlug}
      {errorPlug}
      {elementsPlug}
      {!isEmpty && !isLoading ? (
        <button className={cl.ticketList__button} onClick={onClickHandler}>
          Показать еще
        </button>
      ) : null}
    </ul>
  );
};

export default TicketList;
