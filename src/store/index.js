import { configureStore } from '@reduxjs/toolkit';

import ticketReducer from './reducers/ticketSlice';

export default configureStore({
  reducer: {
    tickets: ticketReducer,
  },
});
