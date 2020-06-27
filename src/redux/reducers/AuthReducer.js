import { Auth } from '../actions/types';

const INITIAL_STATE = {
  loginIsLoading: false,
  loginError: '',
  signUpIsLoading: false,
  signUpError: null,
  token: null,
  tokenExpiration: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // SIGNUP
    case Auth.SIGN_UP_ATTEMPT:
      return { ...state, signUpIsLoading: true };

    case Auth.SIGN_UP_FAIL:
      return {
        ...state,
        signUpIsLoading: false,
        signUpError: action.payload,
      };

    case Auth.SIGN_UP_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        tokenExpiration: action.payload.expiration,
        signUpIsLoading: false,
        signUpError: '',
      };
    // LOGIN
    case Auth.LOGIN_ATTEMPT:
      return { ...state, loginIsLoading: true };

    case Auth.LOGIN_FAIL:
      return {
        ...state,
        loginIsLoading: false,
        loginError: action.payload,
      };

    case Auth.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        tokenExpiration: action.payload.expiration,
        loginIsLoading: false,
        loginError: '',
      };
    // LOGOUT
    case Auth.LOGOUT:
      return {
        ...state,
        token: null,
        tokenExpiration: null,
      };
    case Auth.CLEAR_SIGNUP_ERROR:
      return {
        ...state,
        signUpError: null,
      };
    default:
      return state;
  }
};
