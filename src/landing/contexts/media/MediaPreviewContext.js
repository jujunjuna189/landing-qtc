import { createContext, useContext, useEffect, useState, } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { img7 } from "../../assets";
import { getNewsDetailApi } from "../../helpers";

const preloadImage = (src) => {
    const img = new Image();
    img.src = src;
};

const MediaPreviewContext = createContext();

export const MediaPreviewContextProvider = ({ children }) => {
    const navigation = useNavigate();
    const params = useParams();
    const [news, setNews] = useState({});
    const [isLoader, setIsLoader] = useState(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const images = [
        img7,
    ];

    const getNewsDetail = async () => {
        await getNewsDetailApi({ id: params?.id }).then((res) => {
            setIsLoader(false);
            setNews(res);
        });
    }

    useEffect(() => {
        Object.keys(images).forEach((item, index) => {
            preloadImage(images[item]);
        });
    }, [images]);

    useEffect(() => {
        getNewsDetail();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <MediaPreviewContext.Provider value={{ navigation, images, news, isLoader }}>
            {children}
        </MediaPreviewContext.Provider>
    );
}

export const UseMediaPreviewContext = () => {
    return useContext(MediaPreviewContext);
}