import axios from "axios";
import { API_ASSETS_MARKETING } from "./RouteApi";

export const getAssetsMarketingApi = async ({ filter = '' }) => {
    try {
        const response = await axios.get(`${API_ASSETS_MARKETING}?${filter}`);
        return response.data.list_data;
    } catch (error) {
        console.error("Error fetching items:", error);
    }
};