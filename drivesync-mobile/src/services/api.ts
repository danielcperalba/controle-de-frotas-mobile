import axios from "axios";

const api = axios.create({
    baseURL: "https://5993-177-71-66-182.ngrok-free.app/",
});

export default api;