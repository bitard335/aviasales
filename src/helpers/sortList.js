const sortList = (list, attrToDiff) => {
  let sortedList = [...list];

  if (attrToDiff == 'самый быстрый' && sortedList.length > 0) {
    sortedList.sort((a, b) => a.segments[0].duration - b.segments[0].duration);
  }
  if (attrToDiff == 'самый дешевый' && sortedList.length > 0) {
    sortedList.sort((a, b) => a.price - b.price);
  }

  return sortedList;
};

export default sortList;
