import { createContext, useContext, useEffect, useState } from "react";
import { deleteAssetsMarketingApi, getAssetsMarketingApi } from "../../helpers";

const AssetsContext = createContext();

export const AssetsContextProvider = ({ children }) => {
    const [assets, setAssets] = useState({});

    const getAssets = async () => {
        await getAssetsMarketingApi({}).then((res) => {
            setAssets(res);
        });
    }

    const deleteAssets = async ({ id }) => {
        await deleteAssetsMarketingApi({ id: id }).then((res) => {
            getAssets();
        });
    }

    useEffect(() => {
        getAssets();
    }, []);

    return (
        <AssetsContext.Provider value={{ assets, getAssets, deleteAssets }}>
            {children}
        </AssetsContext.Provider>
    );
}

export const UseAssetsContext = () => {
    return useContext(AssetsContext);
}