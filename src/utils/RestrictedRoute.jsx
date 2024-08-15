import { Navigate } from "react-router-dom";
import { isLoggedIn } from "../redux/auth/selectors";
import { useSelector } from "react-redux";

const RestrictedRoute = ({ element: Component, redirectTo = "/" }) => {
  const isLoggedInn = useSelector(isLoggedIn)

  return isLoggedInn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;