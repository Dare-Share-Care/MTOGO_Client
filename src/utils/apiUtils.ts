import axios, { AxiosInstance } from "axios";

const URL = 'http://localhost:8000';

const api = () => {
    const getUrl = (): string => {
        return URL;
    }

    const getAxios = (): AxiosInstance => {
        return axios.create();
    }

    return {
        getUrl,
        getAxios,
    }
}

export default api();
