import { createContext, useContext, useEffect, useState } from "react";
import { getAnalyticsApi } from "../../helpers";

const DashboardContext = createContext();

export const DashboardContextProvider = ({ children }) => {
    const [analytics, setAnalytics] = useState({ series: [], titles: [] });

    const getAnalytics = async () => {
        await getAnalyticsApi({}).then((res) => {
            var series = [];
            var titles = [];
            (res ?? []).forEach((item, index) => {
                series.push(item.total_views);
                titles.push(item.title);
            });
            setAnalytics({ series, titles });
        });
    }

    useEffect(() => {
        getAnalytics();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <DashboardContext.Provider value={{ analytics, getAnalytics }}>
            {children}
        </DashboardContext.Provider>
    );
}

export const UseDashboardContext = () => {
    return useContext(DashboardContext);
}