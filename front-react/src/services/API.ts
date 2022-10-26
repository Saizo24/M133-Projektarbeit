import axios, { AxiosInstance } from "axios";
const api: AxiosInstance = axios.create({
    baseURL: "http://localhost:8080"
});

/**
 * API
 * contains the axios interceptors
 *
 * Is used on every request and checks if there is a token in the localStorage
 *
 */
api.interceptors.request.use(
    (request) => {
        const token = localStorage.getItem("accessToken");
        if (token) {
            if (request.headers) {
                request.headers.Authorization = token;
            } else {
                return false;
            }
        }
        return request;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
