import { createContext, useContext, useEffect, useState } from "react";
import { deleteCareerApi, getCareerApi } from "../../helpers";

const CareerContext = createContext();

export const CareerContextProvider = ({ children }) => {
    const [career, setCareer] = useState({});

    const getCareer = async () => {
        await getCareerApi({}).then((res) => {
            setCareer(res);
        });
    }

    const deleteCareer = async ({ id }) => {
        await deleteCareerApi({ id: id }).then((res) => {
            getCareer();
        });
    }

    useEffect(() => {
        getCareer();
    }, []);

    return (
        <CareerContext.Provider value={{ career, getCareer, deleteCareer }}>
            {children}
        </CareerContext.Provider>
    );
}

export const UseCareerContext = () => {
    return useContext(CareerContext);
}