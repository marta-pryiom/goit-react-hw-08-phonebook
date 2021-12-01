import { createReducer } from '@reduxjs/toolkit';
import { filteredContacts } from './actions';
import { fetchContacts, submit, deleteContact } from './operations';

export const items = createReducer([], {
    [fetchContacts.fulfilled]: (_, { payload }) => payload,
    [submit.fulfilled]: (state, { payload }) =>
         [payload, ...state],
   
    [deleteContact.fulfilled]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
});

export const filter = createReducer('', {
    [filteredContacts]: (_, { payload }) => payload,
});
