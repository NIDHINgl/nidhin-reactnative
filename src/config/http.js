import axios from 'axios';
// import * as RNLocalize from "react-native-localize";
import {Platform} from 'react-native';

const APP_PLATFORM = 'Mobile';

export const request = axios.create({
  headers: {
    app_platform: APP_PLATFORM,
    device_type: Platform.OS,
  },
});

export function setupHttpConfig() {
  request.defaults.baseURL = 'https://62286b649fd6174ca82321f1.mockapi.io/case-study';
  request.defaults.headers['Accept'] = 'application/json';
}
