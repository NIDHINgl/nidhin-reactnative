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
  request.defaults.baseURL = 'https://upayments-studycase-api.herokuapp.com/api';
  request.defaults.headers['Accept'] = 'application/json';
  request.defaults.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiZXluaWRoaW4uZy5sQGdtYWlsLmNvbSIsImdpdGh1YiI6Imh0dHBzOi8vZ2l0aHViLmNvbS9OSURISU5nbCIsImlhdCI6MTY1OTI2MDM5NCwiZXhwIjoxNjU5NjkyMzk0fQ.JzEVTZu9YjPfmWw9crLFAyZI76bQzwlk2kks4-2nR6U';
}
