
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
import { productDetailsReducer } from "./productDetails/productDetaiilsSlice.js";
import { authReducer } from "./auth/authSlice.js";
import { contactsReducer } from "./contacts/contactsSlice.js";

const mailboxPersistConfig = {
  key: 'mailbox',
  storage,
  whitelist: ['users'], 
};

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'], 
};

export const store = configureStore({
    reducer: { 
      mailbox: persistReducer(mailboxPersistConfig, mailboxReducer),
      productDetails: productDetailsReducer,
      auth: persistReducer (authPersistConfig, authReducer),
      contacts: contactsReducer
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });

  
  export const persistor = persistStore(store);