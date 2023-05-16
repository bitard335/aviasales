const filterList = (list, filters) => {
  const activeFilters = Object.keys(filters)
    .slice(1)
    .map((key, index) => (filters[key] ? index : null));

  const filteredList = list.filter((ticket) => {
    for (let i = 0; i <= 1; i++) {
      const transfersCount = ticket.segments[i].stops.length;
      if (activeFilters.includes(transfersCount)) return true;
    }
  });

  return filteredList;
};

export default filterList;
