import axios from "axios";
import { getLocalToken } from "../../../helper/storage/LocalStorage";
import { API_CAREER_APPLY } from "./RouteApi";

export const getCareerApplyApi = async ({ filter = '' }) => {
    const token = getLocalToken();
    try {
        const response = await axios.get(`${API_CAREER_APPLY}?${filter}`, {
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

export const createCareerApplyApi = async ({ body = {} }) => {
    const token = getLocalToken();
    try {
        const response = await axios.post(API_CAREER_APPLY, body, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Accept": "application/json",
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data.list_data;
    } catch (error) {
        return error?.response?.data ?? undefined;
    }
};

export const updateCareerApplyApi = async ({ id = null, body = {} }) => {
    const token = getLocalToken();
    try {
        const response = await axios.post(`${API_CAREER_APPLY}/${id}`, body, {
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

export const deleteCareerApplyApi = async ({ id = null }) => {
    const token = getLocalToken();
    try {
        const response = await axios.delete(`${API_CAREER_APPLY}/${id}`, {
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