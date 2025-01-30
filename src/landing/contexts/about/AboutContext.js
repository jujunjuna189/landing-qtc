import { createContext, useContext, useEffect, useState } from "react";
import { LandingLanguage } from "../../../helper/language/LandingLanguage";
import { getLocalLanguage } from "../../../helper/storage/LocalStorage";
import { RouteName } from "../../../route";
import { getAssetsApi } from "../../helpers";

const preloadImage = (src) => {
    const img = new Image();
    img.src = src;
};

const AboutContext = createContext();

export const AboutContextProvider = ({ children }) => {

    const language = LandingLanguage[getLocalLanguage().key][RouteName.about];
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const [isLoader, setIsLoader] = useState(true);
    const [images, setImages] = useState({});

    const getAssets = async () => {
        await getAssetsApi({ filter: `page=about` }).then((res) => {
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
        <AboutContext.Provider value={{ language, isLoader, images }}>
            {children}
        </AboutContext.Provider>
    );
}

export const UseAboutContext = () => {
    return useContext(AboutContext);
}