import axios from "axios";
import { API_ASSETS } from "./RouteApi";

export const getAssetsApi = async ({ filter = '' }) => {
    try {
        const response = await axios.get(`${API_ASSETS}?${filter}`);
        return response.data.list_data;
    } catch (error) {
        console.error("Error fetching items:", error);
    }
};