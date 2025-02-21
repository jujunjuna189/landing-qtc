import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LandingLanguage } from "../../../helper/language/LandingLanguage";
import { getLocalLanguage } from "../../../helper/storage/LocalStorage";
import { RouteName } from "../../../route";
import { img7 } from "../../assets";
import { getCareerApi } from "../../helpers";

const preloadImage = (src) => {
    const img = new Image();
    img.src = src;
};

const CareerExploreContext = createContext();

export const CareerExploreContextProvider = ({ children }) => {
    const navigation = useNavigate();
    const language = LandingLanguage[getLocalLanguage().key][RouteName.careerExplore];
    const [page, setPage] = useState(1);
    const [career, setCareer] = useState({});

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const images = [
        img7,
    ];

    const getNews = async () => {
        await getCareerApi({ filter: `page=${page}&per_page=4` }).then((res) => {
            setCareer(res);
        });
    }

    useEffect(() => {
        Object.keys(images).forEach((item, index) => {
            preloadImage(images[item]);
        });
    }, [images]);

    useEffect(() => {
        getNews();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <CareerExploreContext.Provider value={{ language, career, navigation, setPage }}>
            {children}
        </CareerExploreContext.Provider>
    );
}

export const UseCareerExploreContext = () => {
    return useContext(CareerExploreContext);
}