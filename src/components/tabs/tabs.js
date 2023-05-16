import { useDispatch } from 'react-redux';

import { changeSort } from '../../store/reducers/ticketSlice';

import cl from './tabs.module.scss';

const Tabs = ({ setMaxVisible }) => {
  const dispatch = useDispatch();

  const tabs = ['самый дешевый', 'самый быстрый', 'оптимальный'];
  return (
    <ul className={cl.tabs}>
      {tabs.map((tab, index) => {
        return (
          <li key={index} className={cl.tabs__tab}>
            <label>
              <input
                type="radio"
                onClick={() => {
                  dispatch(changeSort({ tab }));
                  setMaxVisible(5);
                }}
                name="filter"
                value={tab}
              />
              <span>{tab}</span>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default Tabs;
