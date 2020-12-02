import axios from "axios";

const instance = axios.create({
    baseURL: "...", // api url
});

export default instance;
