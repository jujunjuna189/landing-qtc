import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LandingLanguage } from "../../../helper/language/LandingLanguage";
import { getLocalLanguage } from "../../../helper/storage/LocalStorage";
import { RouteName } from "../../../route";
import { getAssetsApi, getBusinessApi } from "../../helpers";

const preloadImage = (src) => {
    const img = new Image();
    img.src = src;
};

const BusinessContext = createContext();

export const BusinessContextProvider = ({ children }) => {
    const navigation = useNavigate();
    const language = LandingLanguage[getLocalLanguage().key][RouteName.businessHightlights];
    const [business, setBusiness] = useState({});
    const [isLoader, setIsLoader] = useState(true);
    const [images, setImages] = useState({});

    const getAssets = async () => {
        await getAssetsApi({ filter: `page=business-hightlights` }).then((res) => {
            setIsLoader(false);
            var data = {};
            Object.keys(res.data ?? {}).forEach((item, index) => {
                data[res.data[item].type] = res.data[item].file;
            });
            setImages(data);
            getBusiness();
        });
    }

    const getBusiness = async () => {
        await getBusinessApi({}).then((res) => {
            setBusiness(res);
        });
    }

    useEffect(() => {
        Object.keys(images).forEach((item, index) => {
            preloadImage(images[item]);
        });
    }, [images]);

    useEffect(() => {
        getAssets();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <BusinessContext.Provider value={{ business, language, isLoader, images, navigation, getBusiness }}>
            {children}
        </BusinessContext.Provider>
    );
}

export const UseBusinessContext = () => {
    return useContext(BusinessContext);
}