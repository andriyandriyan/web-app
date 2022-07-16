import axios from 'axios';
import util from './utils';

const http = axios.create({ baseURL: '/api' });

http.interceptors.response.use(resp => resp, err => {
  if (err.response.status === 401) {
    window.location.replace('/login');
  }

  let errorMessage = [];
  if (err.response.status !== 422) {
    errorMessage.push(err.response.data.message || err.response.statusText);
  } else {
    const { errors } = err.response.data;
    errorMessage = Object.keys(errors).map(key => errors[key][0]);
  }
  if (err.response.status !== 401) {
    errorMessage.forEach(message => util.showToast(message, 'error'));
  }
  return Promise.reject(err);
});

export default http;
