import { createContext, useContext, useEffect, useState } from "react";
import { LandingLanguage } from "../../../helper/language/LandingLanguage";
import { getLocalLanguage } from "../../../helper/storage/LocalStorage";
import { RouteName } from "../../../route";
import { getAssetsApi } from "../../helpers";

const preloadImage = (src) => {
    const img = new Image();
    img.src = src;
};

const OurImpactContext = createContext();

export const OurImpactContextProvider = ({ children }) => {

    const language = LandingLanguage[getLocalLanguage().key][RouteName.ourImpact];
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const [isLoader, setIsLoader] = useState(true);
    const [images, setImages] = useState({});

    const getAssets = async () => {
        await getAssetsApi({ filter: `page=our-impact` }).then((res) => {
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
        <OurImpactContext.Provider value={{ language, isLoader, images }}>
            {children}
        </OurImpactContext.Provider>
    );
}

export const UseOurImpactContext = () => {
    return useContext(OurImpactContext);
}