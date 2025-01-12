import { createContext, useContext, useEffect, useState } from "react";
import { getNewsApi } from "../../helpers";

const MediaContext = createContext();

export const MediaContextProvider = ({ children }) => {
    const [page, setPage] = useState(1);
    const [news, setNews] = useState({});

    const getNews = async () => {
        await getNewsApi({ filter: `page=${page}&per_page=4` }).then((res) => {
            setNews(res);
        });
    }

    useEffect(() => {
        getNews();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    return (
        <MediaContext.Provider value={{ news, getNews, setPage }}>
            {children}
        </MediaContext.Provider>
    );
}

export const UseMediaContext = () => {
    return useContext(MediaContext);
}