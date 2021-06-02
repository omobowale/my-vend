/* eslint-disable no-console */
import axios from "axios";
import shortid from "shortid";
import store from "../store/index";

const API_URL ='http://api.livevend.com:8080/';


axios.defaults.baseURL = API_URL;
axios.defaults.headers.common.Accept = "application/json";
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
// axios.defaults.headers.common["Content-Type"] = "multipart/form-data";
// axios.defaults.headers.common["enctype"] = "multipart/form-data";

axios.interceptors.response.use(
    response => response,
    error => {
        if (error.response.status === 401) {
            // Notify.error(error.response.data.error.message);
        }
        return Promise.reject(error);
    }
);

export default axios;
