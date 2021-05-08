import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import phonebookReducer from './phonebook-reducer';


const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      
    },
  }),
];


export const store = configureStore({
  reducer: {
    contacts: phonebookReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
export default store;