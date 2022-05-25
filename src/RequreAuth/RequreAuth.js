import { useAuthState, useSendEmailVerification } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import Loadding from "../Components/Loadding/Loadding";
import auth from "../firebase.init";

const RequireAuth = ({ children }) => {
    const [user,loading] = useAuthState(auth)
    const [sendEmailVerification] = useSendEmailVerification(auth);
    const location = useLocation()
    if(loading){
        return <Loadding></Loadding>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }

    return children
};

export default RequireAuth;