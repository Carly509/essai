import axios from 'axios';
import { BACKEND_URL_ANDROID, BACKEND_URL_IOS } from 'react-native-dotenv';
import { Platform } from 'react-native';
import { store } from '../redux/store';

const axiosOptions = {
  baseURL: Platform.OS === 'ios' ? BACKEND_URL_IOS : BACKEND_URL_ANDROID ,
};

const axiosService = axios.create(axiosOptions);

// An interceptor for all requests to automatically add the latest saved token
// to the headers
axiosService.interceptors.request.use(
  (config) => {
    const { token } = store.getState().auth;

    const mutableConfig = { ...config };
    // coonns

    if (token) {
      mutableConfig.headers.common.Authorization = `Bearer ${token}`;
    }

    return mutableConfig;
  },
  (err) => Promise.reject(err)
);

export default axiosService;
