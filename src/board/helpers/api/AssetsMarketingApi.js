import axios from "axios";
import { getLocalToken } from "../../../helper/storage/LocalStorage";
import { API_ASSETS_MARKETING } from "./RouteApi";

export const getAssetsMarketingApi = async ({ filter = '' }) => {
    const token = getLocalToken();
    try {

        const response = await axios.get(`${API_ASSETS_MARKETING}?${filter}`, {
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

export const createAssetsMarketingApi = async ({ body = {} }) => {
    const token = getLocalToken();
    try {
        const response = await axios.post(API_ASSETS_MARKETING, body, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Accept": "application/json",
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data.list_data;
    } catch (error) {
        return error?.response?.data?.list_data ?? undefined;
    }
};

export const updateAssetsMarketingApi = async ({ id = null, body = {} }) => {
    const token = getLocalToken();
    try {
        const response = await axios.post(`${API_ASSETS_MARKETING}/${id}`, body, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Accept": "application/json",
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data.list_data;
    } catch (error) {
        console.log(error?.response);
        return error?.response?.data?.list_data ?? undefined;
    }
};

export const deleteAssetsMarketingApi = async ({ id = null }) => {
    const token = getLocalToken();
    try {
        const response = await axios.delete(`${API_ASSETS_MARKETING}/${id}`, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
        });
        return response.data.list_data;
    } catch (error) {
        return error?.response?.data?.list_data ?? undefined;
    }
};