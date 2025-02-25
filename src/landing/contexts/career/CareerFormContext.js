import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { createCareerApplyApi } from "../../../board/helpers";
// import { RouteName } from "../../../route";

const CareerFormContext = createContext();

export const CareerFormContextProvider = ({ children }) => {
    const location = useLocation();
    // const navigation = useNavigate();
    const [controller, setController] = useState({});
    const [errors, setErrors] = useState({});

    const onSetController = ({ field, value }) => {
        setController({ ...controller, [field]: value });
    }

    const onSave = async () => {
        var dataBatch = { ...controller };
        dataBatch.career_id = location.state;
        dataBatch.gender = controller?.gender?.value;
        dataBatch.marital_status = controller?.marital_status?.value;
        await createCareerApplyApi({ body: dataBatch }).then((res) => {
            res?.errors && setErrors(res?.errors);
            if (!res?.errors) {
                setErrors({});
                setController({});
            }
        });
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <CareerFormContext.Provider value={{ controller, errors, onSave, onSetController }}>
            {children}
        </CareerFormContext.Provider>
    );
}

export const UseCareerFormContext = () => {
    return useContext(CareerFormContext);
}