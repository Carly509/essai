import React from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { Container, Form, Item, Input } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import PropTypes from 'prop-types';

import Toast from 'react-native-root-toast';
import { signUpUser, clearSignupError } from '../../redux/actions/AuthActions';
import Theme from '../../Theme';
import { signupSchema } from '../../utils/validators';

const Registration = ({ navigation }) => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      password: '',
      password2: '',
    },
    validationSchema: signupSchema,
    onSubmit: (values) => {
      signup(values);
    },
  });

  const signUpError = useSelector((state) => state.auth.signUpError);
  const signUpIsLoading = useSelector((state) => state.auth.signUpIsLoading);
  const dispatch = useDispatch();
  const inputs = {};

  const [secureEntryMode, setSecureEntryMode] = React.useState(true);

  const focusNextField = (id) => {
    // eslint-disable-next-line no-underscore-dangle
    inputs[id]._root.focus();
  };

  const signup = ({ firstName, lastName, phone, email, password }) => {
    // dispatch SIGNUP_USER_ATTEMPT
    dispatch(
      signUpUser({
        firstName,
        lastName,
        phone,
        email,
        password,
        onSuccess: () => null,
      })
    );
  };

  if (signUpError && signUpError.data.status === 'Error') {
    Toast.show('Something went wrong. Try again later', {
      duration: Toast.durations.LONG,
      position: Toast.positions.BOTTOM,
    });
    clearSignupError();
  }

  return (
    <Container style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContentContainer}>
        <View
          style={{
            paddingTop: '15%',
          }}>
          <Text testID="registration-text" style={styles.label}>
            Registration
          </Text>

          <Form style={{ marginVertical: 40 }}>
            <View style={{ marginBottom: 30 }}>
              <Item rounded error={formik.errors.firstName && formik.touched.firstName}>
                <FontAwesome5
                  name="user"
                  size={20}
                  color="#189823"
                  style={{ marginHorizontal: 10 }}
                />
                <Input
                  testID="first-name"
                  onChangeText={formik.handleChange('firstName')}
                  onBlur={formik.handleBlur('firstName')}
                  placeholder="First Name"
                  onSubmitEditing={() => focusNextField('lastName')}
                  returnKeyType="next"
                />
              </Item>
              {formik.errors.firstName && formik.touched.firstName && (
                <Text style={{ marginLeft: 30, color: 'red' }}>{formik.errors.firstName}</Text>
              )}
            </View>

            <View style={{ marginBottom: 30 }}>
              <Item rounded error={formik.errors.lastName && formik.touched.lastName}>
                <FontAwesome5
                  name="user"
                  size={20}
                  color="#189823"
                  style={{ marginHorizontal: 10 }}
                />
                <Input
                  testID="last-name"
                  onChangeText={formik.handleChange('lastName')}
                  onBlur={formik.handleBlur('lastName')}
                  placeholder="Last Name"
                  ref={(input) => {
                    inputs.lastName = input;
                  }}
                  onSubmitEditing={() => focusNextField('email')}
                  returnKeyType="next"
                />
              </Item>
              {formik.errors.lastName && formik.touched.lastName && (
                <Text style={{ marginLeft: 30, color: 'red' }}>{formik.errors.lastName}</Text>
              )}
            </View>

            <View style={{ marginBottom: 30 }}>
              <Item rounded error={formik.errors.email && formik.touched.email}>
                <FontAwesome5
                  name="envelope"
                  size={20}
                  color="#189823"
                  style={{ marginHorizontal: 10 }}
                />
                <Input
                  testID="email-address"
                  autoCapitalize="none"
                  onChangeText={formik.handleChange('email')}
                  onBlur={formik.handleBlur('email')}
                  keyboardType="email-address"
                  placeholder="Email"
                  ref={(input) => {
                    inputs.email = input;
                  }}
                  onSubmitEditing={() => focusNextField('phone')}
                  returnKeyType="next"
                />
              </Item>
              {formik.errors.email && formik.touched.email && (
                <Text style={{ marginLeft: 30, color: 'red' }}>{formik.errors.email}</Text>
              )}
            </View>

            <View style={{ marginBottom: 30 }}>
              <Item rounded error={formik.errors.phone && formik.touched.phone}>
                <FontAwesome5
                  name="phone"
                  size={20}
                  color="#189823"
                  style={{ marginHorizontal: 10 }}
                />
                <Input
                  testID="phone-number"
                  onChangeText={formik.handleChange('phone')}
                  onBlur={formik.handleBlur('phone')}
                  keyboardType="phone-pad"
                  placeholder="Phone"
                  ref={(input) => {
                    inputs.phone = input;
                  }}
                  onSubmitEditing={() => focusNextField('password')}
                  returnKeyType="next"
                />
              </Item>
              {formik.errors.phone && formik.touched.phone && (
                <Text style={{ marginLeft: 30, color: 'red' }}>{formik.errors.phone}</Text>
              )}
            </View>

            <View style={{ marginBottom: 30 }}>
              <Item rounded error={formik.errors.password && formik.touched.password}>
                <FontAwesome5
                  name="lock"
                  size={20}
                  color="#189823"
                  style={{ marginHorizontal: 10 }}
                />
                <Input
                  testID="password"
                  onChangeText={formik.handleChange('password')}
                  onBlur={formik.handleBlur('password')}
                  secureTextEntry={secureEntryMode}
                  placeholder="Password"
                  ref={(input) => {
                    inputs.password = input;
                  }}
                  onSubmitEditing={() => focusNextField('password2')}
                  returnKeyType="next"
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
            </View>

            <Item rounded error={formik.errors.password2 && formik.touched.password2}>
              <FontAwesome5
                name="lock"
                size={20}
                color="#189823"
                style={{ marginHorizontal: 10 }}
              />
              <Input
                onChangeText={formik.handleChange('password2')}
                onBlur={formik.handleBlur('password2')}
                secureTextEntry={secureEntryMode}
                placeholder="Password Confirmation"
                ref={(input) => {
                  inputs.password2 = input;
                }}
                onSubmitEditing={formik.signup}
                returnKeyType="done"
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
            {formik.errors.password2 && formik.touched.password2 && (
              <Text style={{ marginLeft: 30, color: 'red' }}>{formik.errors.password2}</Text>
            )}
          </Form>
        </View>

        <TouchableOpacity
          testID="sign-up-button"
          style={styles.submitButtonText}
          onPress={formik.handleSubmit}>
          {signUpIsLoading && <ActivityIndicator color="#fff" style={{ marginRight: 10 }} />}
          <Text style={styles.signUpText}>Signup</Text>
        </TouchableOpacity>
        <View style={styles.register}>
          <Text style={{ ...Theme.typography.robotoFont.normal }}>Already have an account?</Text>
          <TouchableOpacity
            testID="navigate-to-login-screen"
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginButton}> Login</Text>
          </TouchableOpacity>
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
    alignSelf: 'center',
    ...Theme.typography.largeTitle,
    ...Theme.typography.robotoFont.normal,
    color: Theme.colors.primary,
  },
  errorBox: {
    backgroundColor: Theme.colors.errorBox,
    height: 40,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  submitButtonText: {
    backgroundColor: Theme.colors.primary,
    height: 45,
    borderRadius: 50,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  signUpText: {
    color: '#FFFFFF',
    ...Theme.typography.robotoFont.normal,
  },
  register: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 10,
    marginBottom: 40,
    flexDirection: 'row',
  },
  loginButton: {
    color: Theme.colors.primary,
    ...Theme.typography.robotoFont.normal,
  },
});

Registration.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Registration;
