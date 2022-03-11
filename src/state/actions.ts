import { login as authLogin, register as authRegister } from '../utils/auth';
import { User } from '../types/user';

export default (dispatch: any) => ({
  login: (username: string, password: string, redirectUrl?: Location) =>
    authLogin({
      username,
      password,
    }).then((user: any) => {
      dispatch({ type: 'updateUser', payload: user });
      if (redirectUrl && user) {
        window.location = redirectUrl;
      }
    }),

  logout: () => dispatch({ type: 'updateUser', payload: undefined }),

  register: (username: string, password: string, profile: User, redirectUrl?: Location) =>
    authRegister({
      username,
      password,
      profile,
    }).then((user: any) => {
      dispatch({ type: 'updateUser', payload: user });
      if (redirectUrl && user) {
        window.location = redirectUrl;
      }
    }),
});
