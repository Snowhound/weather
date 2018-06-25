import axios from 'axios';

const API_KEY = "886268d885e2614466725dcf8b9589c5";
export const baseURL = "http://api.openweathermap.org/data/2.5";
export const defaultParams =  {
    units: "metric",
    APPID: API_KEY
}

const API = axios.create({
    baseURL: baseURL,
    params: defaultParams
});

export default API;