import axios, { AxiosInstance } from "axios"

const picsumApi: AxiosInstance = axios.create({
    baseURL: "https://picsum.photos"
})

export default picsumApi