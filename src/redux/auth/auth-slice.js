import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, currentUser } from './auth-operations';
const initialState = {
    user: { name: '', email: '' },
    token: '',
    isAuth: false,
};
const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [register.fulfilled](state, { payload }) {
            state.user = payload.user;
            state.token = payload.token;
            state.isAuth = true;
        },
        [logIn.fulfilled](state, { payload }) {
            state.user = payload.user;
            state.token = payload.token;
            state.isAuth = true;
        },
        [logOut.fulfilled](state, _) {
            state.user = { name: '', email: '' };
            state.token = '';
            state.isAuth = false;
        },
        [currentUser.fulfilled](state, { payload }) {
            state.user = payload;
            state.isAuth = true;
        },
    },
});

export default authSlice.reducer;
