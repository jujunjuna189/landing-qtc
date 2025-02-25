import { createContext, useContext, useEffect, useState } from "react";
import { deleteCareerApplyApi, getCareerApplyApi } from "../../helpers";

const CareerApplyContext = createContext();

export const CareerApplyContextProvider = ({ children }) => {
    const [careerApply, setCareerApply] = useState({});

    const getCareerApply = async () => {
        await getCareerApplyApi({}).then((res) => {
            setCareerApply(res);
        });
    }

    const deleteCareerApply = async ({ id }) => {
        await deleteCareerApplyApi({ id: id }).then((res) => {
            getCareerApply();
        });
    }

    useEffect(() => {
        getCareerApply();
    }, []);

    return (
        <CareerApplyContext.Provider value={{ careerApply, setCareerApply, getCareerApply, deleteCareerApply }}>
            {children}
        </CareerApplyContext.Provider>
    );
}

export const UseCareerApplyContext = () => {
    return useContext(CareerApplyContext);
}