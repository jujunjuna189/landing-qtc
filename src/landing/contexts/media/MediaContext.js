import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LandingLanguage } from "../../../helper/language/LandingLanguage";
import { getLocalLanguage } from "../../../helper/storage/LocalStorage";
import { RouteName } from "../../../route";
import { getAssetsApi, getNewsApi } from "../../helpers";

const preloadImage = (src) => {
    const img = new Image();
    img.src = src;
};

const MediaContext = createContext();

export const MediaContextProvider = ({ children }) => {
    const navigation = useNavigate();
    const language = LandingLanguage[getLocalLanguage().key][RouteName.media];
    const [page, setPage] = useState(1);
    const [news, setNews] = useState({});
    const [isLoader, setIsLoader] = useState(true);
    const [images, setImages] = useState({});

    const getAssets = async () => {
        await getAssetsApi({ filter: `page=media` }).then((res) => {
            setIsLoader(false);
            var data = {};
            Object.keys(res.data ?? {}).forEach((item, index) => {
                data[res.data[item].type] = res.data[item].file;
            });
            setImages(data);
            getNews();
        });
    }

    const getNews = async () => {
        await getNewsApi({ filter: `page=${page}&per_page=4` }).then((res) => {
            setNews(res);
        });
    }

    const getPagination = ({ total }) => {
        var data = [];

        for (var i = 0; i < total; i++) {
            const iPlus = i + 1;
            data.push(<div className={`py-1 px-3 text-primary-dark cursor-pointer ${(i - 1) === news.current_page && 'bg-primary-dark text-white-light'}`} onClick={() => setPage(iPlus)}>{iPlus}</div>);
        }

        return data;
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
        <MediaContext.Provider value={{ navigation, language, isLoader, images, news, getNews, setPage, getPagination }}>
            {children}
        </MediaContext.Provider>
    );
}

export const UseMediaContext = () => {
    return useContext(MediaContext);
}