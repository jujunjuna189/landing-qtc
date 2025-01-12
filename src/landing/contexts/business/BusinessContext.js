import { createContext, useContext, useEffect, useState } from "react";
import { getBusinessApi } from "../../helpers";

const BusinessContext = createContext();

export const BusinessContextProvider = ({ children }) => {
    const [business, setBusiness] = useState({});

    const getBusiness = async () => {
        await getBusinessApi({}).then((res) => {
            setBusiness(res);
        });
    }

    useEffect(() => {
        getBusiness();
    }, []);

    return (
        <BusinessContext.Provider value={{ business, getBusiness }}>
            {children}
        </BusinessContext.Provider>
    );
}

export const UseBusinessContext = () => {
    return useContext(BusinessContext);
}