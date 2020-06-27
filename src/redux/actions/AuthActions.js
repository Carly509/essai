import { Auth } from './types';
import { requestToLoginUser, requestToCreateNewUser } from '../../api/auth';

export const signUpUser = ({ firstName, lastName, email, phone, password }) => async (dispatch) => {
  dispatch({ type: Auth.SIGN_UP_ATTEMPT });

  try {
    const data = await requestToCreateNewUser({
      firstName,
      lastName,
      email,
      phone,
      password,
    });

    dispatch({
      type: Auth.SIGN_UP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    let errorResponse = {
      data: {
        status: 'Error',
      },
    };
    if (error.response && error.response.data) {
      errorResponse = error.response;
    }
    dispatch({ type: Auth.SIGN_UP_FAIL, payload: errorResponse });
  }
};

export const loginUser = ({ email, password, onSuccess, onFailure }) => async (dispatch) => {
  dispatch({ type: Auth.LOGIN_ATTEMPT });

  try {
    const data = await requestToLoginUser({
      email,
      password,
    });

    dispatch({
      type: Auth.LOGIN_SUCCESS,
      payload: data,
    });
    onSuccess();
  } catch (error) {
    dispatch({ type: Auth.LOGIN_FAIL, payload: error.response });
    onFailure(error);
  }
};

export const clearSignupError = () => (dispatch) => {
  dispatch({ type: Auth.CLEAR_SIGNUP_ERROR });
};

export const logoutAction = () => (dispatch) => {
  dispatch({ type: Auth.LOGOUT });
};
