import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { LandingLanguage } from "../../../helper/language/LandingLanguage";
import { getLocalLanguage } from "../../../helper/storage/LocalStorage";
import { RouteName } from "../../../route";
import { img6, lgGkb } from "../../assets";
import { getBusinessApi, getBusinessDetailApi, getProductApi } from "../../helpers";

const preloadImage = (src) => {
    const img = new Image();
    img.src = src;
};

const BusinessPreviewContext = createContext();

export const BusinessPreviewContextProvider = ({ children }) => {
    const navigation = useNavigate();
    const location = useLocation();
    const params = useParams();
    const language = LandingLanguage[getLocalLanguage().key][RouteName.businessPreview];
    const [business, setBusiness] = useState({});
    const [businessDetail, setBusinessDetail] = useState({});
    const [product, setProduct] = useState({});
    // eslint-disable-next-line no-unused-vars
    const [isLoader, setIsLoader] = useState(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const images = [
        img6,
        lgGkb,
    ];

    const getBusiness = async () => {
        await getBusinessApi({}).then((res) => {
            setBusiness(res);
        });
    }

    const getBusinessDetail = async () => {
        await getBusinessDetailApi({ id: params?.id }).then((res) => {
            setBusinessDetail(res);
            getProduct();
        });
    }

    const getProduct = async () => {
        await getProductApi({ filter: `business_id=${params?.id}` }).then((res) => {
            setIsLoader(false);
            setProduct(res);
        });
    }

    const initialPage = async () => {
        await getBusinessDetail();
        await getBusiness();
    }

    useEffect(() => {
        Object.keys(images).forEach((item, index) => {
            preloadImage(images[item]);
        });
    }, [images]);

    useEffect(() => {
        initialPage();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <BusinessPreviewContext.Provider value={{ business, businessDetail, language, isLoader, images, product, navigation, getBusiness, location }}>
            {children}
        </BusinessPreviewContext.Provider>
    );
}

export const UseBusinessPreviewContext = () => {
    return useContext(BusinessPreviewContext);
}