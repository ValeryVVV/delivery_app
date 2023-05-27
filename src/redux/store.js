import { configureStore } from '@reduxjs/toolkit';
import { shopsReducer } from './shopsSlice';
import { filtersReducer } from './filtersSlice';
import { contactsReducer } from './contactsSlice';

export const store = configureStore({
  reducer: {
    shops: shopsReducer,
    filter: filtersReducer,
    contacts: contactsReducer,
  },
});
