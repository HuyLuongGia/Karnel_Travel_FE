import axios from "axios";

export const http = axios.create({
    baseURL: "http://localhost:5296",
    timeout: 30000,
});
