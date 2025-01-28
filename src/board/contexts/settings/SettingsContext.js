import { createContext, useContext, useState } from "react";
import { getAssetsApi } from "../../helpers";

const SettingsContext = createContext();

export const SettingsContextProvider = ({ children }) => {
    const [assets, setAssets] = useState({});

    const getAssets = async ({filter = {}}) => {
        await getAssetsApi({filter: `page=${filter.page}`}).then((res) => {
            setAssets({ ...assets, [filter.page]: res.data ?? [] });
        });
    }

    const onGetAssets = async ({filter}) => {
        getAssets({filter: filter});
    }

    return (
        <SettingsContext.Provider value={{ assets, getAssets, onGetAssets }}>
            {children}
        </SettingsContext.Provider>
    );
}

export const UseSettingsContext = () => {
    return useContext(SettingsContext);
}