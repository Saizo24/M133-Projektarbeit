import api from "./API";

const TOKEN_NAME: string = "accessToken";
const USER_NAME_HEADER: string = "sub"

/**
 * Auth Service
 * contains the functions for logout, login and register
 */

type Props = {
    username: string;
    password: string;
};

export const AuthService = () => ({
    login: async (values: Props) => {
        await api
            .post("/login", { username: values.username, password: values.password })
            .then((response) => {
                if (response.headers) {
                    localStorage.setItem(TOKEN_NAME, response.headers.authorization);
                    const { sub } = parseJwt(response.headers.authorization)
                    localStorage.setItem(USER_NAME_HEADER, sub)
                    return true;
                } else {
                    return false;
                }
            })
            .catch(function (err) {
                throw err;
            });
    },
    logout: () => {
        localStorage.removeItem(TOKEN_NAME);
    },
    getUsernameFromStorage: () => {
        return localStorage.getItem(USER_NAME_HEADER)
    },
});

const parseJwt = (jwt: string) => {
    if (!jwt) {
        return
    }
    const payloadUrl = jwt.split(".")[1]
    const payload = payloadUrl.replace("-", "+").replace("_", "/")
    const payloadJson = JSON.parse(window.atob(payload))
    return payloadJson
}
