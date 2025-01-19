import axios from "axios";
import { getLocalToken } from "../../../helper/storage/LocalStorage";
import { API_PRODUCT } from "./RouteApi";

export const getProductApi = async ({ filter = '' }) => {
    const token = getLocalToken();
    try {

        const response = await axios.get(`${API_PRODUCT}?${filter}`, {
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

export const createProductApi = async ({ body = {} }) => {
    const token = getLocalToken();
    try {
        const response = await axios.post(API_PRODUCT, body, {
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

export const updateProductApi = async ({ id = null, body = {} }) => {
    const token = getLocalToken();
    try {
        const response = await axios.post(`${API_PRODUCT}/${id}`, body, {
            headers: {
                "Authorization": `Bearer ${token}`,
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

export const deleteProductApi = async ({ id = null }) => {
    const token = getLocalToken();
    try {
        const response = await axios.delete(`${API_PRODUCT}/${id}`, {
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