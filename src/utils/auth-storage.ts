import * as cookie from 'react-cookies';

const AUTH_NAME = 'AUTH';

export const getValue = () => {
  return cookie.load(AUTH_NAME);
};

export const setValue = (value: any) => {
  cookie.save(AUTH_NAME, value, {
    path: '/',
    maxAge: 365 * 24 * 60 * 60,
  });
};

export const destroy = () => {
  cookie.remove(AUTH_NAME, {
    path: '/',
    maxAge: 365 * 24 * 60 * 60,
  });
};

export const isLoggedIn = () => {
  const value = getValue();
  return !!value && !!value.token;
};

export const getUserId = () => {
  const value = getValue();
  return value && value.userId;
};

export const getToken = () => {
  const value = getValue();
  return value && value.token;
};

export const getRole = () => {
  const value = getValue();
  return value && value.role;
};

