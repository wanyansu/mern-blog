import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: "https://serenity-blog.herokuapp.com/api/"
})