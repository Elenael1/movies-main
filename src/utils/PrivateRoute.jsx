import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { isLoggedIn } from "../redux/auth/selectors";

const PrivateRoute = ({ element: Component, redirectTo = "/login" }) => {
    const isAuth = useSelector(isLoggedIn)
  return isAuth ? Component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;