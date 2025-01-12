import { createContext, useContext, useEffect, useState } from "react";
import { deleteNewsApi, getNewsApi } from "../../helpers";

const NewsContext = createContext();

export const NewsContextProvider = ({ children }) => {
    const [news, setNews] = useState({});

    const getNews = async () => {
        await getNewsApi({}).then((res) => {
            setNews(res);
        });
    }

    const deleteNews = async ({ id }) => {
        await deleteNewsApi({ id: id }).then((res) => {
            getNews();
        });
    }

    useEffect(() => {
        getNews();
    }, []);
    return (
        <NewsContext.Provider value={{ news, getNews, deleteNews }}>
            {children}
        </NewsContext.Provider>
    );
}

export const UseNewsContext = () => {
    return useContext(NewsContext);
}