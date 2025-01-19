import axios from "axios";
import { API_AUTH } from "./RouteApi";

export const LoginApi = async ({ body = {} }) => {
    // const user = getLocalUser();
    try {
        const response = await axios.post(`${API_AUTH}/login`, body);
        if (response.data) return response.data;
        return response;
    } catch (error) {
        return error?.response?.data;
    }
};