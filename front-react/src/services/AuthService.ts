import { clearAuthTokens } from "axios-jwt";
import { useNavigate } from "react-router-dom";
import api from "./API";
import * as jwt from 'jsonwebtoken';


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

type JWTType = {
    sub: string
    iss: string
    exp: number
}

const navigate = useNavigate()

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
        clearAuthTokens()
        localStorage.removeItem(TOKEN_NAME);
        localStorage.removeItem(USER_NAME_HEADER)
        navigate("/login")
    },
    getUsernameFromStorage: () => {
        return localStorage.getItem(USER_NAME_HEADER)
    },
});

export const isLoggedIn = () => {
    let accessToken = localStorage.getItem("accessToken")
    if (!accessToken) {
        return false
    }
    accessToken = accessToken.substring("Bearer ".length)
    const token: JWTType = jwt.decode(accessToken) as JWTType
    if (!token || !token.exp || token.exp < Date.now() / 1000 || token.sub !== AuthService().getUsernameFromStorage()) {
        return false
    }
    return true
}

export const parseJwt = (jwt: string) => {
    if (!jwt) {
        return
    }
    const payloadUrl = jwt.split(".")[1]
    const payload = payloadUrl.replace("-", "+").replace("_", "/")
    const payloadJson = JSON.parse(window.atob(payload))
    return payloadJson
}
