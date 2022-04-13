import axios from 'axios';
import Urls from '../Urls';

export const axiosInstance = axios.create({
  baseURL: Urls.domainUrl,
});
