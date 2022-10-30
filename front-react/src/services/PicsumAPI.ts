import axios, { AxiosInstance } from "axios"

const BASE_URL = "https://picsum.photos"

const api: AxiosInstance = axios.create({
    baseURL: BASE_URL
})

export default { api, BASE_URL }