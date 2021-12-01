import axios from 'axios';
import { toast } from 'react-toastify';
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
            console.log(data);
            token.set(data.token);

            return data;
        } catch (err) {
            toast.error(' You are already registered');
            // console.log(err.data, err.name, err.body, err.response);
            // console.log(...err);
            rejectWithValue(err.message);
        }
    },
);
export const logIn = createAsyncThunk(
    'auth/ligin',
    async (credentials, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(userLogin, credentials);
            // toast.success('Welcome!');
            token.set(data.token);
            return data;
        } catch (err) {
            toast.success('No such user');
            rejectWithValue(err.message);
        }
    },
);
// export const logIn = createAsyncThunk(
//     'auth/ligin',
//     async (credentials, { rejectWidthValue }) => {
//         try {
//             const { data } = await axios.post(userLogin, credentials);
//             // toast.success('Welcome!');
//             token.set(data.token);
//             return data;
//         } catch (err) {
//             rejectWidthValue(err.message);
//         }
//     },
// );
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
        if (state.auth.token === '') {
            return;
        }
        console.log(state);
        token.set(state.auth.token);
        console.log(state);
        try {
            const { data } = await axios.get(userCurrent);
            console.log(data);
            return data;
        } catch (err) {
            console.log(err);
            rejectWithValue(err.message);
        }
    },
);
