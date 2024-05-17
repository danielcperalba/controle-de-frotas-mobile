import axios from "axios";

const api = axios.create({
    baseUrl: "https://localhost:44344",
});

export default api;