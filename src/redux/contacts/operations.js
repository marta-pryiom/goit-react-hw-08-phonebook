import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
    'fetchContact',
    async (__, { rejectWidthValue }) => {
        try {
            const { data } = await axios.get('/contacts');
            // token.set(data.token);
            return data;
        } catch (error) {
            return rejectWidthValue(error.message);
        }
    },
);

export const submit = createAsyncThunk(
    'addContact',
    async (contact, { rejectWidthValue }) => {
        try {
            const { data } = await axios.post('/contacts', contact);
            return data;
        } catch (error) {
            return rejectWidthValue(error.message);
        }
    },
);

export const deleteContact = createAsyncThunk(
    'deleteContact',
    async (contactId, { rejectWidthValue }) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`);
            if (response.status === 200) {
                return contactId;
            } else {
                throw new Error({ message: 'error' });
            }
        } catch (error) {
            return rejectWidthValue(error.message);
        }
    },
);
