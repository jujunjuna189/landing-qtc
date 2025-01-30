import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LandingLanguage } from "../../../helper/language/LandingLanguage";
import { getLocalLanguage } from "../../../helper/storage/LocalStorage";
import { RouteName } from "../../../route";
import { getAssetsApi } from "../../helpers";

const preloadImage = (src) => {
    const img = new Image();
    img.src = src;
};

const SustainabilityContext = createContext();

export const SustainabilityContextProvider = ({ children }) => {
    const navigation = useNavigate();
    const language = LandingLanguage[getLocalLanguage().key][RouteName.sustainability];
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const [isLoader, setIsLoader] = useState(true);
    const [images, setImages] = useState({});

    const getAssets = async () => {
        await getAssetsApi({ filter: `page=sustainability` }).then((res) => {
            setIsLoader(false);
            var data = {};
            Object.keys(res.data ?? {}).forEach((item, index) => {
                data[res.data[item].type] = res.data[item].file;
            });
            setImages(data);
        });
    }

    useEffect(() => {
        Object.keys(images).forEach((item, index) => {
            preloadImage(images[item]);
        });
    }, [images]);

    useEffect(() => {
        getAssets();
    }, []);

    return (
        <SustainabilityContext.Provider value={{ navigation, language, isLoader, images }}>
            {children}
        </SustainabilityContext.Provider>
    );
}

export const UseSustainabilityContext = () => {
    return useContext(SustainabilityContext);
}