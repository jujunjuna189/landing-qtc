import axios from "axios";
import { API_ANALYTICS } from "./RouteApi";

export const createViewApi = async ({ body = {} }) => {
    // const user = getLocalUser();
    try {
        const response = await axios.post(API_ANALYTICS, body, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
        });
        return response.data.list_data;
    } catch (error) {
        return error?.response?.data?.list_data ?? undefined;
    }
};