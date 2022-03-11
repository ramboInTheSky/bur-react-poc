import { Auth } from '../types/auth';

const {
  getAccountInfo,
  initRegistration,
  login: sdkLogin,
  logout: sdkLogout,
  register: sdkRegister,
} = window.gigya.accounts;

export const login = ({ username, password }: Auth) => {
  return new Promise((resolve, reject) => {
    sdkLogin({
      loginID: username,
      password,
      callback: (response: any) => {
        if (response.errorCode === 0) {
          resolve(response.user);
        } else {
          reject('Something went wrong');
        }
      },
    });
  });
};

export const logout = () => {
  return new Promise((resolve, reject) => {
    sdkLogout({
      callback: (response: any) => {
        if (response.errorCode === 0) {
          resolve();
        } else {
          reject('Something went wrong');
        }
      },
    });
  });
};

export const register = ({ username, password, profile }: Auth) => {
  return new Promise((resolve, reject) => {
    initRegistration({
      callback: (response: any) => {
        if (response.errorCode === 0) {
          sdkRegister({
            email: username,
            password,
            profile,
            regToken: response.regToken,
            finalizeRegistration: true,
            format: 'jsonp',
            callback: (response: any) => {
              if (response.errorCode === 0) {
                resolve(response.user);
              } else {
                reject('Something went wrong');
              }
            },
          });
        } else {
          reject('Something went wrong');
        }
      },
    });
  });
};

export const getAccount = () => {
  return new Promise((resolve) => {
    getAccountInfo({
      callback: (response: any) => {
        if (response.errorCode === 0) {
          resolve(response.profile);
        } else {
          resolve(undefined);
        }
      },
    });
  });
}
