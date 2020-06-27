import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { Container, Form, Item, Input } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import PropTypes from 'prop-types';

import { loginUser } from '../../redux/actions/AuthActions';
import Theme from '../../Theme';
import { loginSchema } from '../../utils/validators';

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const loginIsLoading = useSelector((state) => state.auth.loginIsLoading);

  const passwordRef = React.useRef();

  const [closeErrorBox, setCloseErrorBox] = React.useState(true);
  const [secureEntryMode, setSecureEntryMode] = React.useState(true);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      login(values);
    },
  });

  const focusPassword = () => {
    // eslint-disable-next-line no-underscore-dangle
    passwordRef.current._root.focus();
  };

  const login = ({ email, password }) => {
    // dispatch LOGIN_USER_ATTEMPT
    dispatch(
      loginUser({
        email,
        password,
        onSuccess: () => null,
        onFailure: () => setCloseErrorBox(false),
      })
    );
  };

  return (
    <Container style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContentContainer}>
        <View style={{ alignSelf: 'stretch', alignItems: 'center', paddingTop: '45%' }}>
          <Text testID="login-text" style={styles.label}>
            Login
          </Text>
          <View style={[styles.errorBox, closeErrorBox && { display: 'none' }]}>
            <TouchableOpacity
              style={{ fontSize: 20, fontWeight: 'bold' }}
              onPress={() => setCloseErrorBox(true)}>
              <Text style={{ color: 'red' }}>X</Text>
            </TouchableOpacity>
            <Text style={{ color: '#5e595a', fontSize: 12 }}>
              The email / password combination is not valid
            </Text>
          </View>
          <View style={{ alignSelf: 'stretch', marginTop: 40 }}>
            <Form style={{ marginBottom: 40 }}>
              <View style={{ marginBottom: 30 }}>
                <Item rounded error={formik.errors.email && formik.touched.email}>
                  <FontAwesome5
                    name="envelope"
                    size={20}
                    color="#189823"
                    style={{ marginHorizontal: 10 }}
                  />
                  <Input
                    autoCapitalize="none"
                    testID="login-email-address"
                    onChangeText={formik.handleChange('email')}
                    onBlur={formik.handleBlur('email')}
                    keyboardType="email-address"
                    placeholder="Email"
                    onSubmitEditing={focusPassword}
                    returnKeyType="next"
                  />
                </Item>
                {formik.errors.email && formik.touched.email && (
                  <Text style={{ marginLeft: 30, color: 'red' }}>{formik.errors.email}</Text>
                )}
              </View>
              <Item rounded error={formik.errors.password && formik.touched.password}>
                <FontAwesome5
                  name="lock"
                  size={20}
                  color="#189823"
                  style={{ marginHorizontal: 10 }}
                />
                <Input
                  testID="login-password"
                  onChangeText={formik.handleChange('password')}
                  onBlur={formik.handleBlur('password')}
                  secureTextEntry={secureEntryMode}
                  ref={passwordRef}
                  placeholder="Password"
                />
                <TouchableOpacity onPress={() => setSecureEntryMode(!secureEntryMode)}>
                  <FontAwesome5
                    name={secureEntryMode ? 'eye' : 'eye-slash'}
                    size={15}
                    color="#189823"
                    style={{ marginRight: 10 }}
                  />
                </TouchableOpacity>
              </Item>
              {formik.errors.password && formik.touched.password && (
                <Text style={{ marginLeft: 30, color: 'red' }}>{formik.errors.password}</Text>
              )}
            </Form>

            <TouchableOpacity
              testID="login-button"
              style={styles.submitButtonText}
              onPress={formik.handleSubmit}>
              {loginIsLoading && <ActivityIndicator color="#fff" style={{ marginRight: 10 }} />}
              <Text style={styles.signUpText}>Login</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.register}>
            <Text style={{ ...Theme.typography.robotoFont.normal }}>
              Don't have an account yet?
            </Text>
            <TouchableOpacity
              testID="navigate-back-to-signup-screen"
              onPress={() => navigation.navigate('Registration')}>
              <Text style={styles.registerButton}> Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },
  scrollContentContainer: {
    marginHorizontal: Theme.spacing.small,
  },
  label: {
    ...Theme.typography.largeTitle,
    color: Theme.colors.primary,
    ...Theme.typography.robotoFont.normal,
  },
  errorBox: {
    backgroundColor: '#ffe6ec',
    height: 40,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    ...Theme.typography.robotoFont.normal,
  },
  submitButtonText: {
    backgroundColor: Theme.colors.primary,
    height: 45,
    borderRadius: 50,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    ...Theme.typography.robotoFont.normal,
  },
  signUpText: {
    color: '#FFFFFF',
    ...Theme.typography.robotoFont.normal,
  },
  register: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 10,
    flexDirection: 'row',
  },
  registerButton: {
    color: Theme.colors.primary,
    ...Theme.typography.robotoFont.normal,
  },
});

Login.propTypes = {
  navigation: PropTypes.object.isRequired,
};
export default Login;
