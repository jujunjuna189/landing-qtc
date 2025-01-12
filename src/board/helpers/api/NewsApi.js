import axios from "axios";
import { API_NEWS } from "./RouteApi";

export const getNewsApi = async ({ filter = '' }) => {
    // const user = getLocalUser();
    try {

        const response = await axios.get(`${API_NEWS}?${filter}`, {
            headers: {
                Authorization: `bearer 2|cypuEXtwn5OmYmeGurMME7i23HcXQQlpBJsxC98Rb2ba4814`,
            },
        });
        return response.data.list_data;
    } catch (error) {
        console.error("Error fetching items:", error);
    }
};

export const createNewsApi = async ({ body = {} }) => {
    // const user = getLocalUser();
    try {
        const response = await axios.post(API_NEWS, body, {
            headers: {
                Authorization: `bearer 2|cypuEXtwn5OmYmeGurMME7i23HcXQQlpBJsxC98Rb2ba4814`,
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data.list_data;
    } catch (error) {
        return error?.response?.data?.list_data ?? undefined;
    }
};

export const updateNewsApi = async ({ id = null, body = {} }) => {
    // const user = getLocalUser();
    try {
        const response = await axios.post(`${API_NEWS}/${id}`, body, {
            headers: {
                Authorization: `bearer 2|cypuEXtwn5OmYmeGurMME7i23HcXQQlpBJsxC98Rb2ba4814`,
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data.list_data;
    } catch (error) {
        console.log(error?.response);
        return error?.response?.data?.list_data ?? undefined;
    }
};

export const deleteNewsApi = async ({ id = null }) => {
    // const user = getLocalUser();
    try {
        const response = await axios.delete(`${API_NEWS}/${id}`, {
            headers: {
                Authorization: `bearer 2|cypuEXtwn5OmYmeGurMME7i23HcXQQlpBJsxC98Rb2ba4814`,
            },
        });
        return response.data.list_data;
    } catch (error) {
        return error?.response?.data?.list_data ?? undefined;
    }
};