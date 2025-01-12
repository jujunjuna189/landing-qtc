import axios from "axios";
import { API_BUSINESS } from "./RouteApi";

export const getBusinessApi = async ({ filter = '' }) => {
    // const user = getLocalUser();
    try {

        const response = await axios.get(`${API_BUSINESS}?${filter}`, {
            headers: {
                Authorization: `bearer 2|cypuEXtwn5OmYmeGurMME7i23HcXQQlpBJsxC98Rb2ba4814`,
            },
        });
        return response.data.list_data;
    } catch (error) {
        console.error("Error fetching items:", error);
    }
};