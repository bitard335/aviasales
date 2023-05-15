import { createSlice } from '@reduxjs/toolkit';

const ticketSlice = createSlice({
  name: 'filter',
  initialState: {
    tickets: [1, 2, 3, 4, 5],
    transferFilter: { Все: true, 'Без пересадок': true, '1 пересадка': true, '2 пересадки': true, '3 пересадки': true },
    sort: 'price',
  },
  reducers: {
    changeFilter(state, action) {
      const value = action.payload.filter;
      state.transferFilter[value] = !state.transferFilter[value];

      const keys = Object.keys(state.transferFilter).slice(1);

      state.transferFilter['Все'] = true;
      keys.forEach((key) => {
        if (state.transferFilter[key] == false) state.transferFilter['Все'] = false;
      });
    },
    toggleAll(state) {
      if (state.transferFilter['Все']) for (const key in state.transferFilter) state.transferFilter[key] = false;
      else for (const key in state.transferFilter) state.transferFilter[key] = true;
    },
    changeSort(state, action) {
      state.sort = action.payload.tab;
    },
  },
});

export const { changeFilter, changeSort, toggleAll } = ticketSlice.actions;
export default ticketSlice.reducer;
