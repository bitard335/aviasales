import cl from './tabs.module.scss';

const Tabs = () => {
  const tabs = ['самый дешевый', 'самый быстрый', 'оптимальный'];
  return (
    <ul className={cl.tabs}>
      {tabs.map((tab, index) => {
        return (
          <li key={index} className={cl.tabs__tab}>
            <label>
              <input type="radio" name="filter" value={tab} />
              <span>{tab}</span>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default Tabs;
