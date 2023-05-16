import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { aviaSalesAPI } from '../../services/aviaSalesAPI';

export const fetchTickets = createAsyncThunk('tickets/fetchTickets', async (_, { dispatch }) => {
  try {
    const searchId = await aviaSalesAPI.getSearchId();
    const maxAttempts = 3;
    let attempts = 0;
    let isFull = false;
    let response;
    let tickets;

    while (!isFull) {
      try {
        response = await aviaSalesAPI.getTickets(searchId);
        attempts = 0;
        tickets = response.tickets;
        isFull = response.stop;
        dispatch(loadTickets({ tickets }));
        dispatch(setLoadState({ state: false }));
      } catch (err) {
        attempts++;
        if (attempts == maxAttempts) {
          throw new Error('Ошибка загрузки билетов');
        }
        continue;
      }
    }
  } catch (err) {
    dispatch(setErrorState({ state: true }));
  }
});

const ticketSlice = createSlice({
  name: 'tickets',
  initialState: {
    tickets: [],
    isLoading: true,
    isError: false,
    transferFilter: { Все: true, 'Без пересадок': true, '1 пересадка': true, '2 пересадки': true, '3 пересадки': true },
    sort: 'price',
  },
  reducers: {
    setLoadState(state, action) {
      state.isLoading = action.payload.state;
    },
    setErrorState(state, action) {
      state.isError = action.payload.state;
    },
    loadTickets(state, action) {
      state.tickets = [...state.tickets, ...action.payload.tickets];
    },
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

export const { changeFilter, changeSort, toggleAll, loadTickets, setErrorState, setLoadState } = ticketSlice.actions;
export default ticketSlice.reducer;
