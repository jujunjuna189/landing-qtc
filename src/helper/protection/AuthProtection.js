import { Navigate } from "react-router-dom";
import { RouteName } from "../../route";
import { getLocalToken } from "../storage/LocalStorage";

const AuthProtected = ({ children }) => {
    const token = getLocalToken();
    if (!token) {
        return <Navigate to={RouteName.main} />
    }

    return children;
}

export default AuthProtected;