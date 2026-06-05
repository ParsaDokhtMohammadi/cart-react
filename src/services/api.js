import axios from "axios";

export const api = axios.create(
    { baseURL: "https://fakestoreapi.com/products" }
)

api.interceptors.response.use(response=>response.data,
    err=> Promise.reject(err)
)