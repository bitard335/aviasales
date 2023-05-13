import cl from './filter.module.scss';

const Filter = () => {
  const filters = ['Все', 'Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];
  const filterList = filters.map((filter, index) => {
    return (
      <li key={index} className={cl.filter__item}>
        <label>
          <input type="checkbox" />
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
