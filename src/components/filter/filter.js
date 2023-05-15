import { useDispatch, useSelector } from 'react-redux';

import { changeFilter, toggleAll } from '../../store/reducers/ticketSlice';

import cl from './filter.module.scss';

const Filter = () => {
  const dispatch = useDispatch();
  const activeFilters = useSelector((state) => state.tickets.transferFilter);

  const filters = ['Все', 'Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];
  const filterList = filters.map((filter, index) => {
    const checked = activeFilters[filter];
    const action = filter == 'Все' ? toggleAll : changeFilter;

    return (
      <li key={index} className={cl.filter__item}>
        <label>
          <input type="checkbox" onChange={() => dispatch(action({ filter }))} checked={checked} />
          <span>{filter}</span>
        </label>
      </li>
    );
  });
  return (
    <div className={cl.filter}>
      <div className={cl.filter__name}>Количество пересадок</div>
      <ul className={cl.filter__list}>{filterList}</ul>
    </div>
  );
};

export default Filter;
