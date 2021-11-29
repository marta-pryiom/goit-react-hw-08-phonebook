import { createReducer } from '@reduxjs/toolkit';
import { filteredContacts } from './actions';
import { fetchContacts, submit, deleteContact } from './operations';

export const items = createReducer([], {
    [fetchContacts.fulfilled]: (_, { payload }) => payload,
    [submit.fulfilled]: (state, { payload }) =>
        //  [payload, ...state],
        {
            const searchSameName = state
                .map(el => el.name.toLowerCase())
                .includes(payload.name.toLowerCase());
            if (searchSameName) {
                return alert(`${payload.name} is already in contacts`);
            } else {
                return [payload, ...state];
            }
        },
    [deleteContact.fulfilled]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
});

export const filter = createReducer('', {
    [filteredContacts]: (_, { payload }) => payload,
});
