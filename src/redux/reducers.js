import { combineReducers } from "redux";

const contactsInitialState = [];

const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case 'contact/addContact':
      return [...state, action.payload];

    case 'contact/deleteContact':
      return state.filter(({ id }) => id !== action.payload);

    default:
      return state;
  }
};

const filterInitialState = '';

const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case 'filter/setFilterValue':
      return action.payload;

    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

// * createReducer
// import { createReducer } from "@reduxjs/toolkit";
// import { addContact, deleteContact, setFilterValue } from "./actions";

// const contactsInitialState = [];

// export const contactsReducer = createReducer(contactsInitialState, {
//   [addContact]: (state, action) => {
//     state.push(action.payload);
//   },
//   [deleteContact]: (state, action) => {
//     return state.filter(({ id }) => id !== action.payload);
//   },
// })

// const filterInitialState = '';

// export const filterReducer = createReducer(filterInitialState, {
//   [setFilterValue]: (state, action) => {
//     return action.payload
//   },
// })

