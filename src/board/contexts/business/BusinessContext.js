import { createContext, useContext, useEffect, useState } from "react";
import { deleteBusinessApi, getBusinessApi } from "../../helpers";

const BusinessContext = createContext();

export const BusinessContextProvider = ({ children }) => {
    const [business, setBusiness] = useState({});

    const getBusiness = async () => {
        await getBusinessApi({}).then((res) => {
            setBusiness(res);
        });
    }

    const deleteBusiness = async ({ id }) => {
        await deleteBusinessApi({ id: id }).then((res) => {
            getBusiness();
        });
    }

    useEffect(() => {
        getBusiness();
    }, []);

    return (
        <BusinessContext.Provider value={{ business, getBusiness, deleteBusiness }}>
            {children}
        </BusinessContext.Provider>
    );
}

export const UseBusinessContext = () => {
    return useContext(BusinessContext);
}