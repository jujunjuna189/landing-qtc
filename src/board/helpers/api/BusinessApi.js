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

export const createBusinessApi = async ({ body = {} }) => {
    // const user = getLocalUser();
    try {
        const response = await axios.post(API_BUSINESS, body, {
            headers: {
                Authorization: `bearer 4|3Cv3bBXhvIpa1EAUFxozFvA3DYmdp1LU9MFbnnoO0974984f`,
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data.list_data;
    } catch (error) {
        return error?.response?.data?.list_data ?? undefined;
    }
};

export const updateBusinessApi = async ({ id = null, body = {} }) => {
    // const user = getLocalUser();
    try {
        const response = await axios.post(`${API_BUSINESS}/${id}`, body, {
            headers: {
                Authorization: `bearer 4|3Cv3bBXhvIpa1EAUFxozFvA3DYmdp1LU9MFbnnoO0974984f`,
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data.list_data;
    } catch (error) {
        console.log(error?.response);
        return error?.response?.data?.list_data ?? undefined;
    }
};

export const deleteBusinessApi = async ({ id = null }) => {
    // const user = getLocalUser();
    try {
        const response = await axios.delete(`${API_BUSINESS}/${id}`, {
            headers: {
                Authorization: `bearer 4|3Cv3bBXhvIpa1EAUFxozFvA3DYmdp1LU9MFbnnoO0974984f`,
            },
        });
        return response.data.list_data;
    } catch (error) {
        return error?.response?.data?.list_data ?? undefined;
    }
};