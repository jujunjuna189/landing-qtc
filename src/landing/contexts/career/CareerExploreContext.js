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
    const [isVisibility, setIsVisibility] = useState(false);
    const [page, setPage] = useState(1);
    const [career, setCareer] = useState({});
    const [filter, setFilter] = useState({});

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const images = [
        img7,
    ];

    const onSetFilter = ({ field, value }) => {
        setFilter({ ...filter, [field]: value });
    }

    const getNews = async () => {
        await getCareerApi({ filter: `search=${filter.filter1 ?? ''} ${filter.filter2 ?? ''}&page=${page}&per_page=4` }).then((res) => {
            setCareer(res);
            if (Object.keys(filter).length > 0 && res.data?.length > 0) setIsVisibility(true);
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
    }, [filter]);

    return (
        <CareerExploreContext.Provider value={{ language, career, filter, isVisibility, navigation, setPage, onSetFilter, setIsVisibility }}>
            {children}
        </CareerExploreContext.Provider>
    );
}

export const UseCareerExploreContext = () => {
    return useContext(CareerExploreContext);
}