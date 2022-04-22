import { BehaviorSubject } from 'rxjs';

const loggedStatus = new BehaviorSubject(false);

const getToken = () => {
  return !!localStorage.token;
};
const setLoggedStatus = (status) => {
  loggedStatus.next(status);
};

const getLoggedStatus = () => {
  return loggedStatus.asObservable();
};

const isLogged = () => {
  if (getToken()) return true;

  return false;
};

const logout = () => {
  localStorage.clear();
  setLoggedStatus(false);
};

const userService = {
  loggedStatus,
  getToken,
  setLoggedStatus,
  getLoggedStatus,
  isLogged,
  logout,
};

export default userService;
