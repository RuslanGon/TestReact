
import { configureStore} from "@reduxjs/toolkit";
import { mailboxReducer } from "./mailbox/mailboxReducer.js";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const mailboxPersistConfig = {
  key: 'mailbox',
  storage,
  whitelist: ['users'], 
};

export const store = configureStore({
    reducer: { 
      mailbox: persistReducer(mailboxPersistConfig, mailboxReducer) 
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });

  
  export const persistor = persistStore(store);