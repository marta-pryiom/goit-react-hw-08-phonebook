import { createAction } from '@reduxjs/toolkit';

export const LogInRequest = createAction('auth/LogInRequest');
export const LogInSuccess = createAction('auth/LogInSuccess');
export const LogInError = createAction('auth/LogInError');
