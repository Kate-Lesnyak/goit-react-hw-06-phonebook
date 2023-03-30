import { nanoid } from "nanoid";

export const addContact = ({ name, number }) => {
  return {
    type: 'contact/addContact',
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
};

export const deleteContact = contactId => {
  return {
    type: 'contact/deleteContact',
    payload: contactId,
  };
};

export const setFilterValue = value => {
  return {
    type: 'filter/setFilterValue',
    payload: value,
  };
};

// * createAction
// import { createAction } from "@reduxjs/toolkit";

// export const addContact = createAction('contact/addContact', ({ name, number }) => {
//   return {
//     payload: {
//       id: nanoid(),
//       name,
//       number,
//     },
//   };
// });

// export const deleteContact = createAction('contact/deleteContact');

// export const setFilterValue = createAction('filter/setFilterValue');
