import * as yup from 'yup';

const phoneRegExp = /^\+?1?\s?(([0-9]{3})|\([0-9]{3}\))[-|\s]?[0-9]{3}[-|\s|)]?[0-9]{4}$/;
// eslint-disable-next-line no-useless-escape
const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

export const loginSchema = yup.object().shape({
  password: yup.string().required('Password is required'),
  email: yup.string().email('Invalid email address').required('Email is required'),
});

export const signupSchema = yup.object().shape({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  phone: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Phone is required'),
  password: yup
    .string()
    .min(8, 'Password should be at last 8 characters long')
    .matches(passwordRegExp, 'Password is not valid')
    .required('Password is required'),
  password2: yup
    .string()
    .oneOf([yup.ref('password'), null], "Password confirmation doesn't match the password")
    .required('Password confirmation is required'),
  email: yup.string().email('Invalid email address').required('Email is required'),
});
