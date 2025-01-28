import axios from "axios";
import { getLocalToken } from "../../../helper/storage/LocalStorage";
import { API_ASSETS } from "./RouteApi";

export const getAssetsApi = async ({ filter = '' }) => {
    const token = getLocalToken();
    try {

        const response = await axios.get(`${API_ASSETS}?${filter}`, {
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

export const updateAssetsApi = async ({ id = null, body = {} }) => {
    const token = getLocalToken();
    try {
        const response = await axios.post(`${API_ASSETS}/${id}`, body, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Accept": "application/json",
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data.list_data;
    } catch (error) {
        return error?.response?.data?.list_data ?? undefined;
    }
};

export const deleteAssetsApi = async ({ id = null }) => {
    const token = getLocalToken();
    try {

        const response = await axios.delete(`${API_ASSETS}/${id}`, {
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