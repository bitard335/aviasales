import filterList from './filterList';
import sortList from './sortList';

export const sortedFilteredList = (list, sort, filters) => {
  const filteredList = filterList(list, filters);
  return sortList(filteredList, sort);
};
