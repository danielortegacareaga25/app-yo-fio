import axios from 'axios';
import {BASE_URL_API} from '../const/url';

export const AxiosYoFio = axios.create({baseURL: BASE_URL_API});
