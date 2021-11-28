import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
const userLogin = '/users/login';
const userRegister = '/users/signup';
const userLogOut = '/users/logout';
const userCurrent = '/users/current';
const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

export const register = createAsyncThunk(
    'auth/register',
    async (credentials, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(userRegister, credentials);
            token.set(data.token);
            return data;
        } catch (err) {
            rejectWithValue(err.message);
        }
    },
);
export const logIn = createAsyncThunk(
    'auth/ligin',
    async (credentials, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(userLogin, credentials);
            token.set(data.token);
            return data;
        } catch (err) {
            rejectWithValue(err.message);
        }
    },
);
export const logOut = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue, getState }) => {
        const state = getState();
        console.log(state);
        token.set(state.auth.token);
        try {
            await axios.post(userLogOut);
            token.unset();
        } catch (err) {
            rejectWithValue(err.message);
        }
    },
);
export const currentUser = createAsyncThunk(
    'auth/currentUser',
    async (_, { rejectWithValue, getState }) => {
        const state = getState();
        // if (state.auth.token === null) {
        //     return;
        // }
        console.log(state);
        token.set(state.auth.token);
        console.log(state);
        try {
            const { data } = await axios.get(userCurrent);
            return data;
        } catch (err) {
            rejectWithValue(err.message);
        }
    },
);
