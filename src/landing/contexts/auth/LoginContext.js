import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setLocalUser } from "../../../helper/storage/LocalStorage";
import { RouteName } from "../../../route";
import { CircleLoader } from "../../components";
import { LoginApi } from "../../helpers";

const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
    const navigation = useNavigate();
    const [element, setElement] = useState(null);
    const [controller, setController] = useState({});
    const [error, setError] = useState({});

    const onSetController = ({ field, value }) => {
        setController({ ...controller, [field]: value });
    }

    const onLogin = async () => {
        setElement(<CircleLoader />);
        var dataBatch = { ...controller };
        await LoginApi({ body: dataBatch }).then((res) => {
            setElement(null);
            if (res?.user) {
                setLocalUser(res);
                navigation(RouteName.adminDashboard);
            } else {
                setError(res);
            }
        }).catch((res) => {
            setElement(null);
        });
    }

    return (
        <LoginContext.Provider value={{ controller, error, onSetController, onLogin }}>
            {children}
            {element}
        </LoginContext.Provider>
    );
}

export const UseLoginContext = () => {
    return useContext(LoginContext);
}