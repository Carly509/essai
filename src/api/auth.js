import axios from '../services/axiosService';
import { NEW_SESSION_URL, LOGIN_URL } from './urls';

/**
 * Make a post request to signup the user
 * @param {Object}  user - The user who attempted to sign up
 * @returns {Promise} Promise object represents the response from the server
 */
export const requestToCreateNewUser = ({ firstName, lastName, email, phone, password }) =>
  new Promise(async (resolve, reject) => {
    try {
      const {
        data: { token },
      } = await axios.post(NEW_SESSION_URL, {
        firstName,
        lastName,
        email,
        phone,
        password,
      });

      resolve({ token });
    } catch (error) {
      reject(error);
    }
  });

/**
 * Make a post request to login the user
 * @param {Object}  user - The user who attempted to log in
 * @returns {Promise} Promise object represents the response from the server
 */
export const requestToLoginUser = ({ email, password }) =>
  new Promise(async (resolve, reject) => {
    try {
      const {
        data: { token, expiration },
      } = await axios.post(LOGIN_URL, { email, password });

      resolve({ token, expiration });
    } catch (error) {
      reject(error);
    }
  });
