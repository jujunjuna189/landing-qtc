import axios from "axios";
import { getLocalToken } from "../../../helper/storage/LocalStorage";
import { API_ANALYTICS } from "./RouteApi";

export const getAnalyticsApi = async ({ filter = '' }) => {
    const token = getLocalToken();
    try {

        const response = await axios.get(`${API_ANALYTICS}/summary`, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
        });
        return response.data.list_data;
    } catch (error) {
        console.error("Error fetching items:", error);
    }
};