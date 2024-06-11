import axios from 'axios';
import { config } from '../config'
export function setAxiosDefaults() {
    axios.defaults.baseURL = config.backendUrl
    axios.defaults.headers.common["Access-Control-Allow-Origin"] = config.backendUrl
    axios.defaults.headers.common["Access-Control-Allow-Credentials"] = 'true'
    // axios.defaults.headers.common.xsrfCookieName = 'xsrfCookieName'
}
