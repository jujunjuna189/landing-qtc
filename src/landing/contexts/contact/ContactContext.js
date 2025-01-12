import { createContext, useContext, useState } from "react";
import { createQuestionApi } from "../../../board/helpers";

const ContactContext = createContext();

export const ContactContextProvider = ({ children }) => {
    const [controller, setController] = useState({});
    const [errors, setErrors] = useState({});

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

    return (
        <ContactContext.Provider value={{ controller, errors, onSetController, onSave }}>
            {children}
        </ContactContext.Provider>
    );
}

export const UseContactContext = () => {
    return useContext(ContactContext);
}