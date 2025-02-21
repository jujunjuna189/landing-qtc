import axios from "axios";
import { getLocalToken } from "../../../helper/storage/LocalStorage";
import { API_CAREER } from "./RouteApi";

export const getCareerApi = async ({ filter = '' }) => {
    const token = getLocalToken();
    try {

        const response = await axios.get(`${API_CAREER}?${filter}`, {
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

export const createCareerApi = async ({ body = {} }) => {
    const token = getLocalToken();
    try {
        const response = await axios.post(API_CAREER, body, {
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

export const updateCareerApi = async ({ id = null, body = {} }) => {
    const token = getLocalToken();
    try {
        const response = await axios.post(`${API_CAREER}/${id}`, body, {
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

export const deleteCareerApi = async ({ id = null }) => {
    const token = getLocalToken();
    try {
        const response = await axios.delete(`${API_CAREER}/${id}`, {
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