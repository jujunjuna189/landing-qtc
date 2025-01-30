import { createContext, useContext, useEffect, useState } from "react";
import { createQuestionApi } from "../../../board/helpers";
import { LandingLanguage } from "../../../helper/language/LandingLanguage";
import { getLocalLanguage } from "../../../helper/storage/LocalStorage";
import { RouteName } from "../../../route";
import { getAssetsApi } from "../../helpers";

const preloadImage = (src) => {
    const img = new Image();
    img.src = src;
};

const ContactContext = createContext();

export const ContactContextProvider = ({ children }) => {
    const language = LandingLanguage[getLocalLanguage().key][RouteName.contact];
    const [controller, setController] = useState({});
    const [errors, setErrors] = useState({});
    const [isLoader, setIsLoader] = useState(true);
    const [images, setImages] = useState({});

    const getAssets = async () => {
        await getAssetsApi({ filter: `page=contact` }).then((res) => {
            setIsLoader(false);
            var data = {};
            Object.keys(res.data ?? {}).forEach((item, index) => {
                data[res.data[item].type] = res.data[item].file;
            });
            setImages(data);
        });
    }

    const onSetController = ({ field, value }) => {
        setController({ ...controller, [field]: value });
    }

    const onSave = async () => {
        var dataBatch = { ...controller };
        dataBatch.attachment = controller.attachment?.file;
        await createQuestionApi({ body: dataBatch }).then((res) => {
            res?.errors && setErrors(res?.errors);
            if (!res?.errors) {
                setErrors({});
                setController({});
            }
        });
    };

    useEffect(() => {
        Object.keys(images).forEach((item, index) => {
            preloadImage(images[item]);
        });
    }, [images]);

    useEffect(() => {
        getAssets();
    }, []);

    return (
        <ContactContext.Provider value={{ language, controller, errors, isLoader, images, onSetController, onSave }}>
            {children}
        </ContactContext.Provider>
    );
}

export const UseContactContext = () => {
    return useContext(ContactContext);
}