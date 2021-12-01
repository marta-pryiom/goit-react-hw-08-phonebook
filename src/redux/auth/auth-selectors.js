export const getIsLoggedIn = state => state.auth.isAuth;
export const getUsername = state => state.auth.user.name;
export const getUserToken = state => state.auth.token;
