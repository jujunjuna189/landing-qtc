import axios from "axios";
import { getLocalToken } from "../../../helper/storage/LocalStorage";
import { API_QUESTION } from "./RouteApi";

export const getQuestionApi = async ({ filter = '' }) => {
    const token = getLocalToken();
    try {

        const response = await axios.get(`${API_QUESTION}?${filter}`, {
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

export const createQuestionApi = async ({ body = {} }) => {
    const token = getLocalToken();
    try {
        const response = await axios.post(API_QUESTION, body, {
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

export const updateQuestionApi = async ({ id = null, body = {} }) => {
    const token = getLocalToken();
    try {
        const response = await axios.post(`${API_QUESTION}/${id}`, body, {
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

export const deleteQuestionApi = async ({ id = null }) => {
    const token = getLocalToken();
    try {
        const response = await axios.delete(`${API_QUESTION}/${id}`, {
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