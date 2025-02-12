import { createContext, useContext, useEffect, useState, } from "react";
import { useNavigate } from "react-router-dom";
import { getAssetsMarketingApi } from "../../helpers/api/AssetsMarketingApi";

const MediaMarketingContext = createContext();

export const MediaMarketingContextProvider = ({ children }) => {
    const navigation = useNavigate();
    const [assets, setAssets] = useState({});
    const [isLoader, setIsLoader] = useState(true);

    const getAssets = async () => {
        await getAssetsMarketingApi({}).then((res) => {
            setIsLoader(false);
            setAssets(res);
        }).catch((res) => {
            setIsLoader(false);
        });
    }

    const handleDownload = (route) => {
        const imageUrl = route; // Ganti dengan URL gambar
        const link = document.createElement("a");
        link.href = imageUrl;
        link.setAttribute("download", "sample.jpg"); // Nama file yang diunduh
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    useEffect(() => {
        getAssets();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <MediaMarketingContext.Provider value={{ navigation, assets, isLoader, handleDownload }}>
            {children}
        </MediaMarketingContext.Provider>
    );
}

export const UseMediaMarketingContext = () => {
    return useContext(MediaMarketingContext);
}