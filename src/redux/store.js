
import { combineReducers, createStore } from "@reduxjs/toolkit";
import { mailboxReducer } from "./mailbox/mailboxReducer.js";

const rootReducer = combineReducers({
    mailbox: mailboxReducer
})


export const store = createStore(rootReducer);