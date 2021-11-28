import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { items, filter } from './contacts/reducers';
import {
    // persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import authSlice from './auth/auth-slice';
// import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
// import persistReducer from 'redux-persist/es/persistReducer';
const authPersistConfig = {
    key: 'auth',
    // version: 1,
    storage,
    whitelist: ['token'],
};

const rootReducer = combineReducers({ items, filter });
const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
];
export const store = configureStore({
    reducer: {
        contacts: rootReducer,
        auth: persistReducer(authPersistConfig, authSlice),
    },
    middleware,
    // middleware:
    // getDefaultMiddleware =>
    //     getDefaultMiddleware({
    //         serializableCheck: {
    //             ignoredActions: [
    //                 FLUSH,
    //                 REHYDRATE,
    //                 PAUSE,
    //                 PERSIST,
    //                 PURGE,
    //                 REGISTER,
    //             ],
    //         },
    // })
    // .concat(logger),
});

// const store = configureStore({
//     reducer: {
//         authReducer,
//     },
// });
export default store;
